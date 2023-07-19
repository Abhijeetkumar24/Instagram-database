import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import commentModel from './database/models/commentModel';
import sessionModel from './database/models/sessionModel';
import likeModel from './database/models/likeModel';
import followModel from './database/models/followModel';
import userModel from './database/models/userModel';
import postModel from './database/models/postModel';
import connection from './database/dbConnection';

const app = express();

app.use(express.json());

connection();

const port = 3000; 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  userModel;
  postModel
  likeModel;
  commentModel;
  followModel
  sessionModel;

});
