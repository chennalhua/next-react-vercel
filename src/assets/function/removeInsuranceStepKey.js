import { removeStorage } from "./toolFunction"

export default function removeInsuranceStepKey() {
    removeStorage('local', '_calData')
    removeStorage('local', '_caseDetailData')
    removeStorage('local', '_payData')
    removeStorage('local', '_checkData')
    removeStorage('local', '_success')
}