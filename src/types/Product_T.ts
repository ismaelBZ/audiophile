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
        detaileldImages: {
            mobile:         string[];
            tablet:         string[];
            desktop:        string[];
        }
    }
    price:                  number;
    // features:               string;
    boxContent:             BoxItems[];
    newProduct?:             boolean;
    // productUrl:             string;
    // similarProducts:        SimilarProduct[];
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