interface ProductUrl {
    urlPath: string;
    setUrlPath: (url: string) => void
}

const ProductStore = (set) => ({
    activeProduct: {},
    setActiveProduct: (product) => set({activeProduct: product})
})

export default ProductStore
