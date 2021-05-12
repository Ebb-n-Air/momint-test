import { Request, Response } from "express";
import { successResponse, failureResponse } from "../modules/common/service";
import DbClient from "../services/db-client";
import { ObjectID } from "mongodb";
import { User } from "../models/user.model";

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

export const findFollowers = async (req: Request, res: Response) => {
  try {
    let id = req.body.myId;
    console.log(id);
    
    DbClient.db.collection("users")
    .find( { "Following" : new ObjectID(id) })
    .toArray(function (err,users) {
      if (users) {
        console.log(users);
        successResponse("followers found", users, res);
      } else {
        failureResponse("No followers found", err, res);
      }      
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}


