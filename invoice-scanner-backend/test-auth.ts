import { hashPassword, verifyPassword, generateToken } from './utils/auth';

async function test() {
	// Test password hashing
	const hash = await hashPassword('myPassword');
	console.log('Hashed password:', hash);

	// Test password verification
	const isValid = await verifyPassword('myPassword', hash);
	console.log('Password valid?', isValid);

	// Test token generation
	const token = generateToken(1); // User ID 1
	console.log('Generated token:', token);
	}

test();