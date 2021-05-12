import app from "./config/app";
import * as dotenv from 'dotenv';
import DbClient from "./services/db-client";

dotenv.config();
const port = 3000

DbClient.connect()
  .then(() => {
    console.log("connected to the database");
    // Start the express server
    app.listen(port, () => {
      console.log('Express server listening on port ' + port);
    });
    
  });



