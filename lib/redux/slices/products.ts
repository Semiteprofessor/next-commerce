import { sum, map, filter, uniqBy } from "lodash";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/types/product";

const shippingFee = parseInt(process.env.SHIPPING_FEE || "0", 10);

interface BillingInfo {
  name: string;
  address: string;
  phone: string;
  [key: string]: any;
}

interface CheckoutState {
  activeStep: number;
  cart: Product[];
  subtotal: number;
  total: number;
  discount: number;
  shipping: number;
  billing: BillingInfo | null;
}

const initialState: { checkout: CheckoutState } = {
  checkout: {
    activeStep: 0,
    cart: [],
    subtotal: 0,
    total: 0,
    discount: 0,
    shipping: shippingFee,
    billing: null,
  },
};

const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getCart(state, action: PayloadAction<Product[]>) {
      const cart = action.payload;
      const subtotal = sum(
        cart.map((p) => (p.priceSale || p.price) * p.quantity)
      );

      state.checkout.cart = cart;
      state.checkout.subtotal = subtotal;
      state.checkout.discount = cart.length === 0 ? 0 : state.checkout.discount;
      state.checkout.shipping = cart.length === 0 ? 0 : shippingFee;
      state.checkout.billing =
        cart.length === 0 ? null : state.checkout.billing;
      state.checkout.total =
        subtotal - state.checkout.discount + state.checkout.shipping;
    },

    addCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const updatedProduct = {
        ...product,
        sku: `${product.sku}-${product.size}-${product.colors}`,
      };

      const existing = state.checkout.cart.find(
        (p) => p.sku === updatedProduct.sku
      );

      if (existing) {
        existing.quantity += product.quantity;
      } else {
        state.checkout.cart.push(updatedProduct);
      }

      state.checkout.cart = uniqBy(state.checkout.cart, "sku");

      // recalc
      const subtotal = sum(
        state.checkout.cart.map((p) => (p.priceSale || p.price) * p.quantity)
      );
      state.checkout.subtotal = subtotal;
      state.checkout.total =
        subtotal - state.checkout.discount + state.checkout.shipping;
    },

    removeCart(state, action: PayloadAction<string>) {
      state.checkout.cart = filter(
        state.checkout.cart,
        (item) => item.sku !== action.payload
      );

      const subtotal = sum(
        state.checkout.cart.map((p) => (p.priceSale || p.price) * p.quantity)
      );
      state.checkout.subtotal = subtotal;
      state.checkout.total =
        subtotal - state.checkout.discount + state.checkout.shipping;
    },

    resetCart(state) {
      state.checkout = { ...initialState.checkout };
    },

    increaseQuantity(state, action: PayloadAction<string>) {
      const product = state.checkout.cart.find((p) => p.sku === action.payload);
      if (product) product.quantity += 1;

      const subtotal = sum(
        state.checkout.cart.map((p) => (p.priceSale || p.price) * p.quantity)
      );
      state.checkout.subtotal = subtotal;
      state.checkout.total =
        subtotal - state.checkout.discount + state.checkout.shipping;
    },

    decreaseQuantity(state, action: PayloadAction<string>) {
      const product = state.checkout.cart.find((p) => p.sku === action.payload);
      if (product && product.quantity > 1) product.quantity -= 1;

      const subtotal = sum(
        state.checkout.cart.map((p) => (p.priceSale || p.price) * p.quantity)
      );
      state.checkout.subtotal = subtotal;
      state.checkout.total =
        subtotal - state.checkout.discount + state.checkout.shipping;
    },

    createBilling(state, action: PayloadAction<BillingInfo>) {
      state.checkout.billing = action.payload;
    },

    applyDiscount(state, action: PayloadAction<number>) {
      state.checkout.discount = action.payload;
      state.checkout.total =
        state.checkout.subtotal -
        state.checkout.discount +
        state.checkout.shipping;
    },

    onGotoStep(state, action: PayloadAction<number>) {
      state.checkout.activeStep = action.payload;
    },
    onNextStep(state) {
      state.checkout.activeStep += 1;
    },
    onBackStep(state) {
      state.checkout.activeStep -= 1;
    },
  },
});

export default slice.reducer;

export const {
  getCart,
  addCart,
  removeCart,
  resetCart,
  increaseQuantity,
  decreaseQuantity,
  createBilling,
  applyDiscount,
  onGotoStep,
  onNextStep,
  onBackStep,
} = slice.actions;
