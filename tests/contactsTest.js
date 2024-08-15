import {addContactExec} from "../scenarios/addContact.js";
import {updateContactExec} from "../scenarios/updateContact.js";
import {deleteContactExec} from "../scenarios/deleteContact.js";
import {chai} from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';
import {initContractPlugin} from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js';
import {testData} from "../data/testData.js";
import {loginAndGetToken} from "../utils/dataUtil.js";
import {logout} from "../utils/httpUtil.js";
import {sleep, check} from 'k6';

initContractPlugin(chai)

export const options = {
    vus: testData.users.length,
    iterations: 4,
    thresholds: {
        'http_req_duration': ['p(95) < 500'],
        'http_req_failed': ['rate<0.01']
    }
};

export default function () {
    const token = loginAndGetToken();

    addContactExec(token);
    updateContactExec(token);
    deleteContactExec(token);

    const logoutResponse = logout(token);
    sleep(10);
    check(logoutResponse, {
        'Logout successful': r => r.status === 200
    });
}