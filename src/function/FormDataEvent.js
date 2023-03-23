import { Encrypt, Decrypt } from "./AESTool"
export function EncryptFormData(data) { //加密
    return Encrypt(JSON.stringify(data))
}

export function GetFormData(data) { //解密取得
    if (data !== undefined) {
        return JSON.parse(Decrypt(data))
    }
}