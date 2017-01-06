const crypto = require('crypto');
const hash = crypto.createHash('md5');

export const API_PUBLIC = '298bab46381a6daaaee19aa5c8cafea5';
export const API_PRIVATE = 'b0223681fced28de0fe97e6b9cd091dd36a5b71d';
export const BASE_URL ='http://gateway.marvel.com:80';
export const TS = Math.floor(Date.now() / 1000);

export const hashAPI = hash.update(TS + API_PRIVATE + API_PUBLIC).digest('hex');