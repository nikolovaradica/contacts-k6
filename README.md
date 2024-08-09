# K6 Framework

This K6 framework is used to test the following [API](https://documenter.getpostman.com/view/4012288/TzK2bEa8#c2fbd380-e1c9-468b-a617-394ce0089d72). The API has endpoints for register, log in, log out, CRUD operations for users and CRUD operations for contacts.

## Installation

Make sure you have K6 installed. Check the following [link](https://grafana.com/docs/k6/latest/set-up/install-k6/) from the K6 documenation for ways to install it.

## Usage

Run the test script with

```
k6 run tests/contactsTest.js
```