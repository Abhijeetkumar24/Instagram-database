import { Request } from "express";
import Joi from "joi";

const joiVerification= (body: Request["body"]) => {
const loginSchema = Joi.object({
email: Joi.string().email().required(),
password: Joi.string().required()
});
return loginSchema.validate(body);
};

export default joiVerification;