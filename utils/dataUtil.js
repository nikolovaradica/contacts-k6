import {check, fail} from 'k6';
import {testData} from "../data/testData.js";
import {getContactList, login} from "./httpUtil.js";
import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.0/index.js';
import {contactListSchema} from "../schemas/contact.js";
import {loginSchema} from "../schemas/user.js";

export function getRandomUser() {
    const idx = Math.floor(Math.random() * testData.users.length);
    return testData.users[idx];
}

export function loginAndGetToken() {
    const user = getRandomUser();
    const loginResponse = login(user);
    const checkOutput = check(loginResponse, {
        'User is logged in': r => r.status === 200
    });

    if (!checkOutput) {
        fail('Unsuccessful login');
    }
    expect(loginResponse.json()).to.matchSchema(loginSchema);

    return loginResponse.json().token;
}

export function getRandomContact(token) {
    let contactList = getContactList(token);
    const listCheck = check(contactList, {
        'Get all contacts request is successful': r => r.status === 200
    });

    if(!listCheck) {
        fail('Get all contacts request failed');
    }
    contactList = contactList.json()
    expect(contactList).to.matchSchema(contactListSchema);

    if(contactList.length < 1) {
        fail('No contacts in list');
    }

    const cidx = Math.floor(Math.random() * contactList.length);
    return contactList[cidx];
}