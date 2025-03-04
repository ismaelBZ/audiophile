import { Product_T } from "../types/Product_T";
import { formatPrice } from "./formatPrice";

export default class ProductDetailes {
    private _productName:       string;
    private _thumbName:         string;
    private _description:       string;
    private _features:          string[];
    private _images: {
        thumbUrl:               string;
        mobileUrl:              string;
        tabletUrl:              string;
        desktopUrl:             string;
        detaileldImages: {
            mobile:             string[];
            tablet:             string[];
            desktop:            string[];
        }
    }
    private _price:             number;
    private _priceFormatted:    string;
    private _newProduct?:       boolean;
    private _boxItems:          {item: string, quantity:number}[]

    constructor(product: Product_T) {
        this._productName = product.productName;
        this._thumbName = product.thumbName;
        this._description = product.description;
        this._features = product.features;
        this._images = product.images
        // this._images.thumbUrl = product.images.thumbUrl
        // this._images.mobileUrl = product.images.mobileUrl
        // this._images.tabletUrl = product.images.tabletUrl
        // this._images.desktopUrl = product.images.desktopUrl
        this._price = product.price;
        this._priceFormatted = formatPrice(this._price);
        this._newProduct = product.newProduct;
        this._boxItems = product.boxContent
    }
    
    public get name() : string {
        return this._productName;
    }

    
    public get thumbName() : string {
        return this._thumbName;
    }
    
    
    public get description() : string {
        return this._description
    }
    
    
    public get features() : string[] {
        return this._features;
    }
    
    
    public get price() : number {
        return this._price;
    }

    
    public get priceFormatted() : string {
        return this._priceFormatted;
    }
    

    public get isNewProduct() : boolean | undefined {
        return this._newProduct;
    }
    

    public get boxItems() : {item: string, quantity:number}[] {
        return this._boxItems;
    }
    
    public getImage(type : "thumb" | "mobile" | "tablet" | "desktop") : string {
        switch (type) {
            case "thumb":
                return this._images.tabletUrl;
            case "mobile":
                return this._images.mobileUrl;
            case "tablet":
                return this._images.tabletUrl;
            case "desktop":
                return this._images.desktopUrl;
        }
    }
    
    public getDetailedImages(type: "mobile" | "tablet" | "desktop"): string[] {
        switch (type) {
            case "mobile":
                return this._images.detaileldImages.mobile;
            case "tablet":
                return this._images.detaileldImages.tablet;
            case "desktop":
                return this._images.detaileldImages.desktop
        }
    }
    
    

}