import React, { useEffect, useState } from 'react';

export default function Onbeforeunload() { //網站卸載前訪問
    let [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [unsavedChangesCallback, setUnsavedChangesCallback] = useState(() => (e) => {
        let message = `如"確定"，系統可能不會儲存您所做的變更`;
        e.returnValue = message;
        return message;
    });

    useEffect(() => {
        window.onbeforeunload = function (e) {
            e = e || window.event;
            if (e) {
                e.returnValue = '如"確定"，系統可能不會儲存您所做的變更';
            }
            return '如"確定"，系統可能不會儲存您所做的變更'; // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
        };
    }, [hasUnsavedChanges, unsavedChangesCallback]);
}