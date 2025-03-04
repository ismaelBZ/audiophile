import { CartItem } from "../types/CartItem_T";
import { formatPrice } from "./formatPrice";

export default class PaymentResume {
    private _total: number
    private _shipping = 50;
    private _vat = 1079;
    private _grandTotal: number
    
    constructor(cartList: CartItem[]) {
        this._total = this.computeCartItems(cartList);
        this._grandTotal = this._total + this._shipping + this._vat;
    }

    computeCartItems(cartList: CartItem[]) {
        const total = cartList.reduce((acc, cur) => {
            acc += (cur.price * cur.quantity);
            return acc; 
        }, 0)
        return total;
    }

    getTotal() {
        return `${formatPrice(this._total)}`;
    }

    getShipping() {
        return  `${formatPrice(this._shipping)}`;
    }

    getVat() {
        return `${formatPrice(this._vat)}`;
    }

    getGrandTotal () {
        return `${formatPrice(this._grandTotal)}`
    };
    
}