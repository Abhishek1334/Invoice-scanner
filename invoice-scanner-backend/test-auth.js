"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./utils/auth");
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        // Test password hashing
        const hash = yield (0, auth_1.hashPassword)('myPassword');
        console.log('Hashed password:', hash);
        // Test password verification
        const isValid = yield (0, auth_1.verifyPassword)('myPassword', hash);
        console.log('Password valid?', isValid);
        // Test token generation
        const token = (0, auth_1.generateToken)(1); // User ID 1
        console.log('Generated token:', token);
    });
}
test();
