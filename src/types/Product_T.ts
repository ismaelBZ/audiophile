export type Product_T = {
    productName:            string;
    thumbName:              string;
    description:            string;
    features:               string[];
    images: {
        thumbUrl:           string;
        mobileUrl:          string;
        tabletUrl:          string;
        desktopUrl:         string;
        detailedImages: {
            mobileImages:         string[];
            tabletImages:         string[];
            desktopImages:        string[];
        }
    }
    price:                  number;
    boxContent:             BoxItems[];
    newProduct?:             boolean;
    // productUrl:             string;
    similarProducts:        SimilarProduct[];
}

type BoxItems = {
    item:                   string;
    quantity:               number;
}

export type SimilarProduct = {
    productName:            string;
    productUrl:             string;
    images: {
        mobileUrl:          string;
        tabletUrl:          string;
        desktopUrl:         string;
    }
}