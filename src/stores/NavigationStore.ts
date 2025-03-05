const NavigationStore = (set) => ({
    pathUrl: "",
    navigationHistory: ["/"],
    setPathUrl: (path) => set({pathUrl: path}),
    setNavigationHistory: (url) => set((state) => ({navigationHistory: [...state.navigationHistory, url]})),
    cutHistory: () => set((state) => ({navigationHistory: state.navigationHistory.slice(1)}))
})

export default NavigationStore