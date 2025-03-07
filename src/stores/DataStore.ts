const DataStore = (set) => ({
    aboutUs: {},
    categories: {},
    home: {},
    products: {
        headphones: {
            pageOffset: 0,
            data: []
        },
        earphones: {
            pageOffset: 0,
            data: []
        },
        speakers: {
            pageOffset: 0,
            data: []
        }
    },
    setAboutUs: (data) => set({aboutUs: data}),
    setCategories: (data) => set({categories: data}),
    setHome: (data) => set({home: data}),
    setHeadphones: (data) => set((state) => ({ 
        products: {
            ...state.products,
            headphones: {
                ...state.products.headphones,
                data
            }
        }
    })),
    setEarphones: (data) => set((state) => ({
        products: {
            ...state.products,
            earphones: {
                ...state.products.earphones,
                data
            }
        }
    })),
    setSpeakers: (data) => set((state) => ({
        products: {
            ...state.products,
            speakers: {
                ...state.products.speakers,
                data
            }
        }
    }))
})

export default DataStore