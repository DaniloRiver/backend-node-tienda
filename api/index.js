const express = require('express');
const routerApi = require('./routes');
const {  logErrors,errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['https://localhost:3000','https://myapp.co'];
const options = {
  origin:(origin, callback)=>{
    if(whitelist.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error('no permitido'));
    }
  }
}
// app.use(cors(options));

app.get('api/',(req, res)=>{
  res.send('Hola mi server');
})

app.get('api/nueva-ruta',(req, res)=>{
  res.send('Hola, soy una nueva ruta');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, ()=>{
  console.log('Mi port'+ port);
});



