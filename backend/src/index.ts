import 'dotenv/config';
import 'module-alias/register';
import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import morgan = require('morgan');
import createQuestionnaireRouter from './resources/router/create.router';
import errorMiddleware from './middleware/errorMiddleware';
import validateEnv from './utils/validateEnv';

validateEnv();

class App {
  public app: Express;
  public port: number;

  constructor() {
    this.app = express();
    this.port = parseInt(process.env.PORT as string); // Use the validated PORT from validateEnv()

    this.initializeDatabaseConnection();
    this.configureMiddleware();
    this.configureRoutes();
    this.startServer(); // Start the server after configuration
  }

  private async initializeDatabaseConnection(): Promise<void> {
    try {
      const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
      await mongoose.connect(
        `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`,
      );
      console.log('MongoDB Connected Successfully');
    } catch (error: any) {
      console.error('Failed to Connect to MongoDB:', error.message);
    }
  }

  private configureMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
    this.app.use(errorMiddleware);
  }

  private configureRoutes(): void {
    this.app.get('/api/v1/status', (req, res) => {
      res.send('API is running');
    });

    this.app.use('/api/v1', createQuestionnaireRouter);
  }

  public startServer() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on http://localhost:${this.port}`);
    });
  }
}

new App();
export default App;
