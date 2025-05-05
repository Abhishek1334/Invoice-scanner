import bcrypt from "bcrypt";
import { config } from "../config";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
	try {
		return await bcrypt.hash(password, SALT_ROUNDS);
	} catch (error) {
		console.error("Password hashing failed:", error);
		throw new Error("Password processing error");
	}
}

export async function verifyPassword(
	plainPassword: string,
	hashedPassword: string
	): Promise<boolean> {
	try {
		if (!plainPassword || !hashedPassword) {
		throw new Error("Missing password credentials");
		}
		return await bcrypt.compare(plainPassword, hashedPassword);
	} catch (error) {
		console.error("Password verification failed:", error);
		throw new Error("Authentication failed");
	}
}

export function generateToken(userId: number): string {
	if (!config.auth.secret) {
		throw new Error('JWT secret is not configured');
	}
	
	try {
		return jwt.sign(
		{ userId },
		config.auth.secret,
		{ expiresIn: config.auth.expiresIn }
		);
	} catch (error) {
		console.error("Token generation failed:", error);
		throw new Error("Authentication system error");
	}
}

export function verifyToken(token: string): { userId: number } {
	if (!config.auth.secret) {
		throw new Error('JWT secret is not configured');
	}

	if (!token) {
		throw new Error("Authorization token is required");
	}

	try {
		return jwt.verify(token, config.auth.secret) as { userId: number };
	} catch (error) {
		console.error("Token verification failed:", error);
		throw new Error("Invalid or expired token");
	}
}

export type AuthPayload = { userId: number };