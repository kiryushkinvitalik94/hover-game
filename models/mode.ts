// @ts-nocheck
import mongoose from "mongoose";
import Joi from "joi";

const modeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  field: {
    type: Number,
    required: true,
  },
});

mongoose.models = {};

export const ModeModel = mongoose.model("mode", modeSchema);

export const validate = (body) => {
  const schema = Joi.object({
    name: Joi.string().required().max(50).min(3),
    field: Joi.number().required().min(5).max(50),
  });

  return schema.validateAsync(body);
};
