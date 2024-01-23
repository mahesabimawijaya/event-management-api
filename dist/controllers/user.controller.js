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
exports.Register = exports.getUserDetails = exports.getUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield prisma.user.findMany();
            res.status(201).send({
                success: true,
                users: users,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getUsers = getUsers;
function getUserDetails(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const user = yield prisma.user.findUnique({
                where: {
                    id: id,
                },
            });
            res.status(201).send({
                success: true,
                users: user,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getUserDetails = getUserDetails;
function Register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username, password, email, phoneNumber, firstName, lastName, role, } = req.body;
            const user = yield prisma.user.create({
                data: {
                    username: username,
                    password: password,
                    email: email,
                    phoneNumber: phoneNumber,
                    firstName: firstName,
                    lastName: lastName,
                    role: role,
                },
            });
            res.status(201).send({
                message: "User registered successfully",
                user: user,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.Register = Register;
