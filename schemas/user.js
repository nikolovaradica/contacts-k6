export const loginSchema = {
    "type": "object",
    "properties": {
        "user": {
            "type": "object",
            "properties": {
                "_id": { "type": "string" },
                "firstName": { "type": "string" },
                "lastName": { "type": "string" },
                "email": { "type": "string" },
                "__v": { "type": "integer" }
            },
            "required": ["_id", "firstName", "lastName", "email", "__v"]
        },
        "token": { "type": "string" }
    },
    "required": ["user", "token"]
}
