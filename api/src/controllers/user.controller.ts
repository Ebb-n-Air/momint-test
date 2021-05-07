import { Request, Response } from "express";
import { successResponse, failureResponse } from "../modules/common/service";
import DbClient from "../services/db-client";
import { ObjectID } from "mongodb"

export const exampleUserMethod = async (req: Request, res: Response) => {
  try {
    let filter = { _id: new ObjectID(req.body.email) };
    await DbClient.db
      .collection("user")
      .findOne({ _id: filter })
      .then((user: any) => {
        if (user) {
          successResponse("Got user details", user, res);
        } else {
          failureResponse("No users found", null, res);
        }
      });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

