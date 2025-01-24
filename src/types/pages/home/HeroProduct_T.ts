export type HeroProduct_T = {
    productName:     string;
    description:     string;
    newProduct:      boolean;
    images: {
        mobileUrl:   string;
        tabletUrl:   string;
        desktopUrl:  string;
    }
}