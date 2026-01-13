"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATABASE_URL = exports.PORT = void 0;
exports.loadConfig = loadConfig;
const dotenv_1 = __importDefault(require("dotenv"));
function loadConfig() {
    dotenv_1.default.config();
}
exports.PORT = process.env.PORT || 4000;
exports.DATABASE_URL = process.env.DATABASE_URL || '';
