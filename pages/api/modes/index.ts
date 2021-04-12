import connectDB from "../../../middleware/mongoDB";
import type { NextApiRequest, NextApiResponse } from "next";
import { ModeModel } from "../../../models/mode";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      try {
        const body = JSON.parse(req.body);
        const newMode = {
          name: body.name,
          field: body.field,
        };
        const mode = await new ModeModel(newMode).save();
        res.status(200).json(mode);
      } catch (error) {
        res.status(500).json(`${error}`);
      }
      break;
    case "GET":
      try {
        const modes = await ModeModel.find();
        res.status(200).json(modes);
      } catch (error) {
        res.status(500).json(`${error}`);
      }
      break;
    case "PUT":
      break;
    case "DELETE":
      break;

    default:
      break;
  }
};

export default connectDB(handler);
