import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUsers(req: Request, res: Response): Promise<any> {
  try {
    const users = await prisma.user.findMany();
    res.status(201).send({
      success: true,
      users: users,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getUserDetails(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const id = parseInt(req.params.id);
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    res.status(201).send({
      success: true,
      users: user,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function Register(req: Request, res: Response): Promise<any> {
  try {
    const {
      username,
      password,
      email,
      phoneNumber,
      firstName,
      lastName,
      role,
    } = req.body;
    const user = await prisma.user.create({
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
  } catch (error) {
    console.log(error);
  }
}
