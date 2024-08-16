import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js'

export const testData = {
    users: [
        {email: 'contact1@k6.com', password: 'myPassword1'},
        {email: 'contact2@k6.com', password: 'myPassword2'},
        {email: 'contact3@k6.com', password: 'myPassword3'},
        {email: 'contact4@k6.com', password: 'myPassword4'},
        // {email: 'contact5@k6.com', password: 'myPassword5'}
    ],
    contact: createRandomContact()
}

function createRandomContact() {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        birthdate: faker.date.past(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumberFormat(),
        street1: faker.address.streetAddress(),
        street2: faker.address.streetAddress(),
        city: faker.address.city(),
        stateProvince: faker.address.stateAbbr(),
        postalCode: faker.address.zipCode(),
        country: faker.address.country()
    }
}