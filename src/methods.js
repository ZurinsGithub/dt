let deviceEnv = ''

function getDeviceEnv() {
    if (deviceEnv == '') {
        // #ifdef APP
        deviceEnv = 'APP'
        // #endif

        // #ifdef APP-PLUS
        deviceEnv = 'APP-PLUS'
        // #endif

        // #ifdef MP-WEIXIN
        deviceEnv = 'MP-WEIXIN'
        // #endif

        // #ifdef WEB
        deviceEnv = 'WEB'
        // #endif
    }

    return deviceEnv
}

export { getDeviceEnv }