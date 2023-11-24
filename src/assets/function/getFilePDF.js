export default function getFilePDF(fileName) {
    switch (fileName) {
        // 保誠
        case '保誠人壽e無憂定期壽險條款樣張': return '/pdf/Prudential/保誠人壽e無憂定期壽險.pdf'
        case '保誠人壽e起到老定期壽險條款樣張': return '/pdf/Prudential/保誠人壽e起到老定期壽險.pdf'
        case '保誠人壽e保庇健康保險條款樣張': return '/pdf/Prudential/保誠人壽e保庇健康保險.pdf'
        // 富邦
        case '富邦產物寵物綜合保險': return '/pdf/FuBon/富邦產物寵物綜合保險(其-20220209).pdf'
        case '富邦寵物險計畫二保單條款': return '/pdf/FuBon/富邦寵物險計畫二保單條款.pdf'
        case '富邦產物旅綜保險': return '/pdf/FuBon/travel-7.富邦產物旅綜保險條款(限國外).pdf'
        case '富邦產物旅行平安保險': return '/pdf/FuBon/travel-1.富邦產物旅行平安保險(旅).pdf'
        case '富邦產物個人旅行綜合保險-甲型': return '/pdf/FuBon/travel-2.富邦產物個人旅行綜合保險-甲型(旅).pdf'
        case '富邦產物安心遊個人旅行綜合保險': return '/pdf/FuBon/travel-3.富邦產物安心遊個人旅行綜合保險(旅).pdf'
        case '富邦產物個人旅行綜合保險附加居家火災臨時住宿補償保險': return '/pdf/FuBon/travel-4.富邦產物個人旅行綜合保險附加居家火災臨時住宿補償保險(旅).pdf'
        case '富邦產物個人旅行綜合保險附加居家竊盜損失補償保險': return '/pdf/FuBon/travel-5.富邦產物個人旅行綜合保險附加居家竊盜損失補償保險(旅).pdf'
        case '富邦產物安心旅行駕駛人責任保險': return '/pdf/FuBon/travel-6.富邦產物安心旅行駕駛人責任保險(車).pdf'
        // 華南
        case '華南產物寵物綜合保險': return '/pdf/SouthChine/華南產物寵物綜合保險(A).pdf'
        case '華南產物旅綜險商品內容': return '/pdf/SouthChine/華南產物旅綜險商品內容.pdf'
        case '華南產物國內旅綜條款': return '/pdf/SouthChine/華南產物國內旅綜條款.pdf'
        case '華南產物國外旅綜條款': return '/pdf/SouthChine/華南產物國外旅綜條款.pdf'
        case '華南保險契約變更書': return '/pdf/SouthChine/華南保險契約變更書.pdf'
        case '華南信用卡授權書': return '/pdf/SouthChine/華南信用卡授權書_11109.pdf'
        case '華南英文投保證明申請書': return '/pdf/SouthChine/華南英文投保證明申請書.pdf'
        // 法巴
        case '法商法國巴黎人壽e起健走定期壽險': return '/pdf/Cardif/法商法國巴黎人壽e起健走定期壽險.pdf'
        case '法商法國巴黎人壽e起健走一至六級意外失能扶助保險': return '/pdf/Cardif/法商法國巴黎人壽e起健走一至六級意外失能扶助保險.pdf'
        case '法國巴黎人壽MCC_APP_e健康操作手冊': return '/pdf/Cardif/法國巴黎人壽MCC_APP_e健康操作手冊.pdf'
        case '個人健康險及傷害險之費率可能調整告知書': return '/pdf/Cardif/個人健康險及傷害險之費率可能調整告知書.pdf'
        case 'FATCA及CRS身份確認同意暨聲明書': return '/pdf/Cardif/FATCA及CRS身份確認同意暨聲明書.pdf'
        case '要保書警語及其相關聲明事項': return '/pdf/Cardif/要保書警語及其相關聲明事項.pdf'
        case '履行個人資料保護法告知義務通知書': return '/pdf/Cardif/法商法國巴黎人壽保險股份有限公司台灣分公司履行個人資料保護法告知義務通知書_頁1-1_202210.pdf'
        case '傳統壽險投保人須知要保書填寫說明_OTC版': return '/pdf/Cardif/傳統壽險-投保人須知暨要保書填寫說明-網投傳統壽險版.pdf'
        case '電子保單申請暨權益事項說明': return '/pdf/Cardif/法商法國巴黎人壽電子保單申請書暨權益事項說明.pdf'
        default: break
    }
}