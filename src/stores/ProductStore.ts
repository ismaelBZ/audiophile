interface ProductUrl {
    urlPath: string;
    setUrlPath: (url: string) => void
}

const ProductStore = (set) => ({
    activeProduct: {},
    urlPath: "",
    setUrlPath: (newPath:string) => set({urlPath: newPath}),
    setActiveProduct: (product) => set({activeProduct: product}) 
})

export default ProductStore
