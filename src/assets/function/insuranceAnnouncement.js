import Swal from 'sweetalert2'
export default function insuranceAnnouncement(company) {
    /* 規格：
    { 
        company: '華南產物', 
        time: '於 6/22 00:00 ~ 6/23 23:59', 
        content: '系統維護，造成不便請見諒。', 
        startTime: '2023-06-21 23:59:00', 
        endTime: '2023-06-30 23:59:00' 
    }
    {
        company: '華南產物',
        time: '<h5 class="mb-2">寵物險</h5>',
        content: '<div class="text-danger">投保受理截止日<br />2023/07/30(日) 20:00</div>',
        startTime: '2023-07-30 19:58:00',
        endTime: '2024-12-30 20:00:00'
    }
    */
    const announcementList = [
        {
            company: '華南產物',
            time: '於 11/26(日) 09:25 ~ 18:30',
            content: '系統維護，造成不便請見諒。',
            startTime: '2023-11-26 09:25:00',
            endTime: '2023-11-26 18:31:00'
        }
    ]

    if (announcementList.length == 0) {
        return
    }

    let notToGo = false
    announcementList.map((item) => {
        if (company == item.company) {
            if (new Date().getTime() >= new Date(item.startTime).getTime() && new Date().getTime() < new Date(item.endTime).getTime()) {
                Swal.fire({ //警告視窗
                    html: `
                            <div>
                                <div class='text-center'>
                                    <h5 class='mb-3'>【${item.company}】</h5>
                                    <div class='text-center'>
                                        <p class='py-2 text-center'>${item.time}</p>
                                        ${item.content}
                                    </div>
                                </div>
                            </div>`,
                    confirmButtonColor: '#107a47',
                    confirmButtonText: '關閉',
                }).then((result) => {
                    if (result.isConfirmed) {
                        return
                    }
                })
                notToGo = true
            }
        }
    })
    return notToGo
}