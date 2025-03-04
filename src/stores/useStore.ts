import {create} from "zustand";
import ProductStore from "./ProductStore";
import CartStore from "./CartStore";

export const useStore = create((...args) => ({
    ...ProductStore(...args),
    ...CartStore(...args)
}))