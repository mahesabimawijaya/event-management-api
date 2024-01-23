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
exports.filterType = exports.filterLocation = exports.deleteEvent = exports.updateEvent = exports.getEventDetails = exports.getEvents = exports.createEvent = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
//create
function createEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, description, image, startDate, endDate, location, type } = req.body;
            const event = yield prisma.event.create({
                data: {
                    name: name,
                    description: description,
                    image: image,
                    startDate: startDate,
                    endDate: endDate,
                    location: location,
                    type: type,
                },
            });
            res.status(201).send({
                message: "Event created successfully",
                event: event,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.createEvent = createEvent;
//read all
function getEvents(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const events = yield prisma.event.findMany();
            res.status(200).send({
                message: "OK",
                events: events,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getEvents = getEvents;
//read
function getEventDetails(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const event = yield prisma.event.findUnique({
                where: {
                    id: id,
                },
            });
            res.status(200).send({
                message: "OK",
                event: event,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.getEventDetails = getEventDetails;
//update
function updateEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const { name, description, image, startDate, endDate, location, type } = req.body;
            const event = yield prisma.event.update({
                where: {
                    id: id,
                },
                data: {
                    name: name,
                    description: description,
                    image: image,
                    startDate: startDate,
                    endDate: endDate,
                    location: location,
                    type: type,
                },
            });
            res.status(201).send({
                message: "Event updated successfully",
                event: event,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.updateEvent = updateEvent;
//delete
function deleteEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id);
            const event = yield prisma.event.delete({
                where: {
                    id: id,
                },
            });
            res.status(201).send({
                message: "Event deleted successfully",
                event: event,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.deleteEvent = deleteEvent;
//location filter
function filterLocation(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const location = req.params.location;
        try {
            const events = yield prisma.event.findMany({
                where: {
                    location: location,
                },
            });
            res.status(200).send({
                message: "OK",
                events: events,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.filterLocation = filterLocation;
//type filter
function filterType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const type = req.params.type;
        try {
            const events = yield prisma.event.findMany({
                where: {
                    type: type,
                },
            });
            res.status(200).send({
                message: "OK",
                events: events,
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.filterType = filterType;
