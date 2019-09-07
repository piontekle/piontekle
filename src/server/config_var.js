const name = process.env.NAME
const me = process.env.ME
const host = "gmail.com"

module.exports = {
    USER: `${name}@${host}`,
    EMAIL: `${me}@${host}`,
    PASS: process.env.PASS
}
