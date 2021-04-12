import connectDB from "../../../middleware/mongoDB";
import type { NextApiRequest, NextApiResponse } from "next";
import { ModeModel } from "../../../models/mode";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  switch (req.method) {
    case "POST":
      break;
    case "GET":
      break;
    case "PUT":
      try {
        const body = JSON.parse(req.body);
        const updateMode = {
          name: body.name,
          field: body.field,
        };
        const mode = await ModeModel.findOneAndUpdate({ _id: id }, updateMode, {
          new: true,
        });
        res.status(200).json(mode);
      } catch (error) {
        res.status(500).json(`${error}`);
      }
      break;
    case "DELETE":
      try {
        const mode = await ModeModel.findOneAndDelete({ _id: id });
        res.status(200).json(mode);
      } catch (error) {
        res.status(500).json(`${error}`);
      }
      break;

    default:
      break;
  }
};

export default connectDB(handler);
