import { MongoClient, ObjectId } from "mongodb";

const db_link =
  "mongodb+srv://adorefurnix:8SmVmZnPW9VNnDcw@cluster0.esrghya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(db_link);

client.connect();
const db = client.db("Adorefurnix");
const Productscollection = db.collection("Products");
const Admindatacollection = db.collection("Admindata");
const blogscollection = db.collection("blogs");

export { blogscollection, Admindatacollection, Productscollection, ObjectId };
