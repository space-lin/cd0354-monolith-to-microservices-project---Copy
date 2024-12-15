import cors from 'cors';
import express from 'express';
import {sequelize} from './sequelize';
import {IndexRouter} from './controllers/v0/index.router';
import bodyParser from 'body-parser';
import {config} from './config/config';
import {V0_USER_MODELS} from './controllers/v0/model.index';


(async () => {
  await sequelize.addModels(V0_USER_MODELS);

  console.debug("Initialize database connection...");
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080;

  // Define allowed origins
 

  app.use(bodyParser.json());

  // CORS configuration
  app.use(cors());

  // Define routes
  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get('/', async (req, res) => {
    res.send('/api/v0/');
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running ${config.url}`);
    console.log('press CTRL+C to stop server');
  });
})();