//初始資料格式

export function InitChooseJobValue() { //@ 職業選擇
    return {
        main1: null, //一層
        main2: null, //二層
        main3: null, //三層 
        mainLevel: null, //職級
        mainVail:'N', //驗證
        isOther: false, //是否兼職
        other1: null,
        other2: null,
        other3: null,
        otherLevel: null,
        otherVail:'N',
    }
}