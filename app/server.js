
import express from 'express';
import cors from 'cors'
import 'dotenv/config';
import router from './routers/router.js';


const app = express();
const port = process.env.PORT || 5000;

app.use([
    express.json({limit: '50mb'}),
    express.urlencoded({extended: true, limit: '50mb'}),
    cors()
]);
app.use('/api/v1/', router);

app.listen(port);

export default app;