import {check, fail} from 'k6';
import {getContact, updateContact} from '../utils/httpUtil.js';
import {getRandomContact} from "../utils/dataUtil.js";
import {expect} from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';
import {contactSchema} from "../schemas/contact.js";

export function updateContactExec(token) {
    const contact = getRandomContact(token);
    const updatedContact = {
        firstName: 'Radica',
        birthdate: '2002-05-01'
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
}