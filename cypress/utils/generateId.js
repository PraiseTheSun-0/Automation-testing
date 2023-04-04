const crypto = require("crypto")

export function getRandomString(length = 9) {
    return crypto.randomBytes(length).toString('hex');
};