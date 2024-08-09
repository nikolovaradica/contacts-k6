import {check, fail} from 'k6';
import {getContact, updateContact, logout} from '../utils/httpUtil.js';
import {testData} from "../data/testData.js";
import {getRandomContact, loginAndGetToken} from "../utils/dataUtil.js";
import {expect} from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';
import {contactSchema} from "../schemas/contact.js";

export const updateContactScenario = {
    executor: 'per-vu-iterations',
    vus: testData.users.length,
    iterations: 3,
    exec: 'updateContactExec',
    maxDuration: '10s',
    startTime: '10s'
};

export function updateContactExec() {
    const token = loginAndGetToken()
    const contact = getRandomContact(token);
    const updatedContact = {
        firstName: 'Radica'
    };

    const updateResponse = updateContact(token, contact._id, updatedContact);
    const updateCheck = check(updateResponse, {
        'Update contact request is successful': r => r.status === 200
    });

    if (!updateCheck) {
        fail('Update contact request failed');
    }
    expect(updateResponse.json()).to.matchSchema(contactSchema)

    let newContact = getContact(token, contact._id).json();
    check(newContact, {
        'Contact is updated': c => c.firstName === updatedContact.firstName
    });
    expect(newContact).to.matchSchema(contactSchema);

    const logoutResponse = logout(token);
    check(logoutResponse, {
        'Logout successful': r => r.status === 200
    });
}