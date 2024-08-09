import {addContactScenario, addContactExec} from "../scenarios/addContact.js";
import {updateContactScenario, updateContactExec} from "../scenarios/updateContact.js";
import {deleteContactScenario, deleteContactExec} from "../scenarios/deleteContact.js";
import { chai } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';
import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js';

initContractPlugin(chai)
export {addContactExec, updateContactExec, deleteContactExec}

export const options = {
    scenarios: {
        addContact: addContactScenario,
        updateContact: updateContactScenario,
        deleteContact: deleteContactScenario
    },
    thresholds: {
        'http_req_duration': ['p(95) < 500'],
        'http_req_failed': ['rate<0.01']
    }
};

export default function () {
}