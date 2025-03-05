const DeviceStore = (set) => ({
    deviceType: "",
    windowWidth: {},
    setDeviceType: (device) => set({deviceType: device}),
    setWindowWidth: (newWidth) => set({windowWidth: newWidth}),
})

export default DeviceStore