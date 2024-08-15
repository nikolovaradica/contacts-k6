import {check, fail} from 'k6';
import {getContact, deleteContact, logout, getContactList} from '../utils/httpUtil.js';
import {getRandomContact, loginAndGetToken} from "../utils/dataUtil.js";

export function deleteContactExec(token) {
    const contact = getRandomContact(token);

    const deleteResponse = deleteContact(token, contact._id);
    const deleteCheck = check(deleteResponse, {
        'Delete contact request is successful': r => r.status === 200
    });

    if(!deleteCheck) {
        fail('Delete request failed');
    }

    const contactListResponse = getContactList(token);
    check(contactListResponse, {
        'Contact list request is successful': r => r.status === 200
    });

    const contactDeleted = contactListResponse.json().some(c => c._id === contact._id)
    check(contactDeleted, {
        'Contact is deleted': (isDeleted) => !isDeleted
    });
}