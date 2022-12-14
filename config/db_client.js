const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const mongoose = require('mongoose');


const create_connectMDB = async () => {

    try{
         await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true , 
            useUnifiedTopology : true
         });
         console.log("Mongo DB connection SUCCESS");
        
    } catch (error) {

        console.error(`Mongo DB connection FAIL ${error}`);
        process.exit(1)

    }
}

create_connectMDB();
const connectMDB = mongoose.connection
module.exports = connectMDB;

// How to access preexisting collection
// Solution: https://stackoverflow.com/questions/5794834/how-to-access-a-preexisting-collection-with-mongoose

// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.once('open', async function () {

// const collection  = connection.db.collection("backtesting");
//   collection.find({}).toArray(function(err, data){
//       console.log(data); // it will print your collection data
//   });

// });

