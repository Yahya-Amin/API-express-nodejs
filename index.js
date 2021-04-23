import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// connection mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true
});

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => 
    res.send(`Serveur node et express sur port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`votre serveur est sur le port ${PORT}`)
);
