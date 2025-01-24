export type ProductCard_T = {
    productName:            string;
    description:            string;
    newProduct:             boolean;
    productUrl?:            string;
    categoryImages: {
        mobileUrl:          string;
        tabletUrl:          string;
        desktopUrl:         string;
    }
}