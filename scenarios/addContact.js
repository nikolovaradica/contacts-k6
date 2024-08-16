import {check, fail, sleep} from 'k6';
import {addContact, logout} from '../utils/httpUtil.js';
import {testData} from '../data/testData.js'
import {loginAndGetToken} from "../utils/dataUtil.js";
import {contactSchema} from "../schemas/contact.js";
import {expect} from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';

export function addContactExec(token) {
    const contact = testData.contact;

    const contactResponse = addContact(token, contact);
    const contactCheck = check(contactResponse, {
        'Add contact request is successful': r => r.status === 201
    });

    if (!contactCheck) {
        fail('Add request failed');
    }
    expect(contactResponse.json()).to.matchSchema(contactSchema);

    const contactId = contactResponse.json()._id;
    check(contactId, {
        'Contact is created': (id) => id !== null,
    });
}