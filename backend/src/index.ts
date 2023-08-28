import 'dotenv/config';
import 'module-alias/register'
import express from 'express';
const app = express();
import cors from 'cors';
import morgan = require('morgan');
import createQuestionnaireRouter  from './resources/router/create.router';

const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/api/v1/status', (req, res) => {
  res.send('API is running');
});

app.use("/api/v1", createQuestionnaireRouter)

app.listen(port, () => {
    console.log(`Server listening on http://localhost: ${port}`)
})
