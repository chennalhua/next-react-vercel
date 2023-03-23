module.exports = {
    // 一律都跑 env 如需部屬該對應，要改為 !!! "env" !!!
    envPro: { //run production
        REACT_APP_API: 'https://golden-api.goldennet.com.tw:9048',
        REACT_APP_AES_KEY: 'KEY66666GoLdEnBrOkErAPI-84200994',
        REACT_APP_AES_IV: 'I2GoLdEnSeRvIcEV'
    },
    env: { //run development
        REACT_APP_API: 'https://eip2.goldennet.com.tw:9043',
        REACT_APP_AES_KEY: 'KEY66666GoLdEnBrOkErAPI-84200994',
        REACT_APP_AES_IV: 'I2GoLdEnSeRvIcEV'
    }
}