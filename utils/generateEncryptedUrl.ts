const randomSting = require('randomstring');

const randomString = (): string => randomSting.generate(8);

export const generateEncryptedUrl = () => `https://pbid.io/${randomString()}/`;
