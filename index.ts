import express from 'express';
import indexRoutes from './src/routes/indexRoutes';
import commentModel from './src/database/models/commentModel';
import sessionModel from './src/database/models/sessionModel';
import likeModel from './src/database/models/likeModel';
import followModel from './src/database/models/followModel';
import userModel from './src/database/models/userModel';
import postModel from './src/database/models/postModel';
import connection from './src/database/dbConnection';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import * as path from 'path';


const app = express();

const swaggerDocument = YAML.load(path.join(__dirname, './swagger.yaml')); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

connection();





app.use('/', indexRoutes);



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
