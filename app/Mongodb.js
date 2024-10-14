import { MongoClient, ObjectId } from "mongodb";

const db_link = process.env.mongodb_link;

const client = new MongoClient(db_link);

client.connect();
const db = client.db("Adorefurnix");
const Productscollection = db.collection("Products");
const userscollection = db.collection("users");
const Admindatacollection = db.collection("Admindata");
const blogscollection = db.collection("blogs");
const orderscollection = db.collection("orders");
const contactmessages = db.collection("contactmessages");

export function getcollection() {
  // throw new Error("This is a simulated server error");
  return {
    blogscollection,
    Admindatacollection,
    Productscollection,
    userscollection,
    orderscollection,
    contactmessages,
    ObjectId,
  };
}
