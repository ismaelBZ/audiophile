const CartStore = (set, get) => ({
    cartList: [],
    isShowingCart: false,
    addToCart: (item) => set((state) => ({
        cartList: [...state.cartList, item]
    })),
    decreaseQuantity: (index) => set((state) => ({
        cartList: state.cartList.reduce((acc, item, i) => {
            if (index === i) {
                const newItem = { ...item }
                if (newItem.quantity > 1) {
                    newItem.quantity = newItem.quantity - 1
                    return [...acc, newItem];
                } else { 
                    return acc;
                }
            } else {
                return [...acc, item];
            }
        },[])
    })),
    increaseQuantity: (index) => set((state) => ({
        cartList: state.cartList.map((item, i) => {
            if (index === i) {
                const newItem = { ...item };
                newItem.quantity = newItem.quantity + 1;
                return newItem;
            } else {
                return item;
            }
        })
    })),
    clearCart: () => set({ cartList: []}),
    openCart: () => set({ isShowingCart: true}),
    closeCart: () => set({ isShowingCart: false})
});

// openCart:
// closeCart:
// isShowingCart:

export default CartStore;