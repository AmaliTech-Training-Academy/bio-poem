import 'dotenv/config';
import 'module-alias/register';
import express, { Express } from 'express';
import cors from 'cors';
import morgan = require('morgan');
import createQuestionnaireRouter from './resources/router/create.router';
import errorMiddleware from './middleware/errorMiddleware';

class App {
  public app: Express;
  public port: number | string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 5000;
    this.configureMiddleware();
    this.configureRoutes();
    this.startServer();
  }

  private configureMiddleware(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan('dev'));
    this.app.use(errorMiddleware)
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

new App()
export default App;

// const port = process.env.PORT || 5000

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev'));

// app.get('/api/v1/status', (req, res) => {
//   res.send('API is running');
// });

// app.use("/api/v1", createQuestionnaireRouter)

// app.listen(port, () => {
//     console.log(`Server listening on http://localhost: ${port}`)
// })
