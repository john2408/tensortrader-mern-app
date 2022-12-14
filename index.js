const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const express = require('express');
const backtestRoutes = require('./routes/backtestRoutes');


//const connectMDB = require('./config/db_client')
//connectMDB();

const app = express();

// move json data from and to react client
app.use(express.json());

app.use('/api/backtesting', backtestRoutes);


// Server static assets if in production
if(process.env.NODE_ENV === 'production'){
  //Set static folder
  app.use(express.static(path.resolve(__dirname,'./frontend/build')));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./frontend/build/index.html'))
  });
}else{
  app.get("/", (req, res) => {
    res.json({ message: "API running..." });
  });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`))