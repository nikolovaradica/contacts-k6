import http from 'k6/http';
import { config } from '../config/config.js'

export function login(user) {
    const url = `${config.baseUrl}/users/login`;
    const body = JSON.stringify(user);
    const params = {headers: {'Content-Type': 'application/json'}}

    return http.post(url, body, params);
}

export function logout(token) {
    const url = `${config.baseUrl}/users/logout`;
    const params = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

    return http.post(url, null, params);
}

export function addContact(token, contact) {
    const url = `${config.baseUrl}/contacts`;
    const body = JSON.stringify(contact);
    const params = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

    return http.post(url, body, params);
}

export function updateContact(token, contactId, contact) {
    const url = `${config.baseUrl}/contacts/${contactId}`;
    const body = JSON.stringify(contact);
    const params = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

    return http.patch(url, body, params);
}

export function deleteContact(token, contactId) {
    const url = `${config.baseUrl}/contacts/${contactId}`;
    const params = {headers: {'Authorization': `Bearer ${token}`}};

    return http.del(url, null, params);
}

export function getContactList(token) {
    const url = `${config.baseUrl}/contacts`;
    const params = {headers: {'Authorization': `Bearer ${token}`}};

    return http.get(url, params);
}

export function getContact(token, contactId) {
    const url = `${config.baseUrl}/contacts/${contactId}`;
    const params = {headers: {'Authorization': `Bearer ${token}`}};

    return http.get(url, params);
}