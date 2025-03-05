import {create} from "zustand";
import ProductStore from "./ProductStore";
import CartStore from "./CartStore";
import NavigationStore from "./NavigationStore";
import DeviceStore from "./DeviceStore";

export const useStore = create((...args) => ({
    ...ProductStore(...args),
    ...CartStore(...args),
    ...NavigationStore(...args),
    ...DeviceStore(...args),
}))