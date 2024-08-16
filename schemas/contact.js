export const contactSchema = {
    "type": "object",
    "properties": {
        "_id": { "type": "string" },
        "firstName": { "type": "string" },
        "lastName": { "type": "string" },
        "birthdate": { "type": "string" },
        "email": { "type": "string" },
        "phone": { "type": "string" },
        "street1": { "type": "string" },
        "street2": { "type": ["string", "null"] },
        "city": { "type": "string" },
        "stateProvince": { "type": "string" },
        "postalCode": { "type": "string" },
        "country": { "type": "string" },
        "owner": { "type": "string" },
        "__v": { "type": "integer" }
    },
    "required": [
        "_id",
        "firstName",
        "lastName",
        "birthdate",
        "email",
        "phone",
        "street1",
        "city",
        "stateProvince",
        "postalCode",
        "country",
        "owner",
        "__v"
    ]
}

export const contactListSchema = {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "_id": { "type": "string" },
            "firstName": { "type": "string" },
            "lastName": { "type": "string" },
            "birthdate": { "type": "string" },
            "email": { "type": "string" },
            "phone": { "type": "string" },
            "street1": { "type": "string" },
            "street2": { "type": ["string", "null"] },
            "city": { "type": "string" },
            "stateProvince": { "type": "string" },
            "postalCode": { "type": "string" },
            "country": { "type": "string" },
            "owner": { "type": "string" },
            "__v": { "type": "integer" }
        },
        "required": [
            "_id",
            "firstName"
        ]
    }
}

