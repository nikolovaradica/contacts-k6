import {check, fail} from 'k6';
import {getContact, deleteContact, logout} from '../utils/httpUtil.js';
import {testData} from "../data/testData.js";
import {getRandomContact, loginAndGetToken} from "../utils/dataUtil.js";
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';
import {contactSchema} from "../schemas/contact.js";

export const deleteContactScenario = {
    executor: 'per-vu-iterations',
    vus: testData.users.length,
    iterations: 3,
    exec: 'deleteContactExec',
    maxDuration: '10s',
    startTime: '20s'
};

export function deleteContactExec() {
    const token = loginAndGetToken();
    const contact = getRandomContact(token);

    const deleteResponse = deleteContact(token, contact._id);
    const deleteCheck = check(deleteResponse, {
        'Delete contact request is successful': r => r.status === 200
    });

    if(!deleteCheck) {
        fail('Delete request failed');
    }

    const checkDeletion = getContact(token, contact._id);
    check(checkDeletion, {
        'Contact is deleted': r => r.status === 404
    });

    const logoutResponse = logout(token);
    check(logoutResponse, {
        'Logout successful': r => r.status === 200
    });
}