import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

if (!process.env.DATABASE_URL || !process.env.JWT_SECRET) {
	throw new Error ('Missing required environment variables');
}

export const config = {
	db:{
		url: process.env.DATABASE_URL
	},
	auth : {
		secret: process.env.JWT_SECRET,
		expiresIn : process.env.JWT_EXPIRES_IN || '1d'
	}
}