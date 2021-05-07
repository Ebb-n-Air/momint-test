import * as mongodb from "mongodb";
export default class DbClient {
    public static db;
    public static async connect() {
      const mongoUrl = process.env.DB_CONNECTION_STRING;
      let connection = await mongodb.MongoClient.connect(mongoUrl,{ useUnifiedTopology: true, useNewUrlParser: true })
      this.db = connection.db("momint");
      console.log("Connected to db");
      return this.db;
    }
}
