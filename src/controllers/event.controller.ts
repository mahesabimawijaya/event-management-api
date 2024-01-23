import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//create
export async function createEvent(req: Request, res: Response): Promise<any> {
  try {
    const { name, description, image, startDate, endDate, location, type } =
      req.body;
    const event = await prisma.event.create({
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
  } catch (error) {
    console.log(error);
  }
}

//read all
export async function getEvents(req: Request, res: Response): Promise<any> {
  try {
    const events = await prisma.event.findMany();
    res.status(200).send({
      message: "OK",
      events: events,
    });
  } catch (error) {
    console.log(error);
  }
}

//read
export async function getEventDetails(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const id = parseInt(req.params.id);
    const event = await prisma.event.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).send({
      message: "OK",
      event: event,
    });
  } catch (error) {
    console.log(error);
  }
}

//update
export async function updateEvent(req: Request, res: Response): Promise<any> {
  try {
    const id = parseInt(req.params.id);
    const { name, description, image, startDate, endDate, location, type } =
      req.body;
    const event = await prisma.event.update({
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
  } catch (error) {
    console.log(error);
  }
}

//delete
export async function deleteEvent(req: Request, res: Response): Promise<any> {
  try {
    const id = parseInt(req.params.id);
    const event = await prisma.event.delete({
      where: {
        id: id,
      },
    });
    res.status(201).send({
      message: "Event deleted successfully",
      event: event,
    });
  } catch (error) {
    console.log(error);
  }
}

//location filter
export async function filterLocation(
  req: Request,
  res: Response
): Promise<any> {
  const location = req.params.location;
  try {
    const events = await prisma.event.findMany({
      where: {
        location: location,
      },
    });
    res.status(200).send({
      message: "OK",
      events: events,
    });
  } catch (error) {
    console.log(error);
  }
}

//type filter
export async function filterType(req: Request, res: Response): Promise<any> {
  const type = req.params.type;
  try {
    const events = await prisma.event.findMany({
      where: {
        type: type,
      },
    });
    res.status(200).send({
      message: "OK",
      events: events,
    });
  } catch (error) {
    console.log(error);
  }
}
