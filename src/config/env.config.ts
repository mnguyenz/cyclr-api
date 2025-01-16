import dotenv from 'dotenv';
dotenv.config();

export const env = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    CYCLR_DOMAIN: process.env.CYCLR_DOMAIN
};
