import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const signUpSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    bio: Joi.string().required(),
    profileImage: Joi.string(),
    created_at: Joi.string()
});


const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});


const postSchema = Joi.object({
    // userId: Joi.string().required(),         getting userId from token
    image: Joi.string().required(),
    caption: Joi.string().required(),
    likes: Joi.number().default(0),
    comments: Joi.number().default(0),
    created_at: Joi.date().default(Date.now),
});


const likeSchema = Joi.object({
    // userId: Joi.string().required(),
    postId: Joi.string().required(),
    created_at: Joi.date().default(Date.now),
});


const commentSchema = Joi.object({
    // userId: Joi.string().required(),
    postId: Joi.string().required(),
    text: Joi.string().required(),
    created_at: Joi.date().default(Date.now),
});


const followSchema = Joi.object({
    // senderId: Joi.string().required(),
    receiverId: Joi.string().required(),
    status: Joi.string().required(),
    created_at: Joi.date().default(Date.now),
});


const sessionSchema = Joi.object({
    // userId: Joi.string().required(),
    // token: Joi.string().required(),             getting token from headers
    created_at: Joi.date().default(Date.now),
    expires_at: Joi.date(),
});


export const signUpJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = signUpSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export const loginJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};


export const addPostJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = postSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};


export const likeJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = likeSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};


export const commentJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = commentSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};


export const followJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = followSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};


export const sessionJoiMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error } = sessionSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

