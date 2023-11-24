import moment from "moment";

export default function travelGetTime(date) {
    var today = moment().startOf('day');
    if (moment(date).isSame(today, 'd')) { //為今天
        let ary = []
        let thisHour = Number(moment().add(2, 'h').format('HH')) //選擇時間控制在出發前 2 小時(出發前 1 小時須完成投保)
        for (let i = thisHour; i <= 23; i++) {
            if (i >= 0 && i <= 9) {
                i = `0${i}`
            }
            ary.push(i.toString())
        }
        return ary
    } else { //非今天
        return ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']
    }
}