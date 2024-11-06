import { MongoClient, ObjectId } from "mongodb";

const db_link = process.env.mongodb_link;

let client;
let db;

async function connectToDatabase() {
  try {
    client = new MongoClient(db_link, { serverSelectionTimeoutMS: 10000 });
    await client.connect();
    db = client.db("Adorefurnix");
  } catch (error) {
    throw new Error("Failed to connect to the database. Please try again later.");
  }
}

async function initializeCollections() {
  if (!db) {
    await connectToDatabase();
  }

  const Productscollection = db.collection("Products");
  const userscollection = db.collection("users");
  const Admindatacollection = db.collection("Admindata");
  const blogscollection = db.collection("blogs");
  const orderscollection = db.collection("orders");
  const contactmessages = db.collection("contactmessages");

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

export async function getcollection() {
  try {
    const collections = await initializeCollections();
    return collections;
  } catch (error) {
    console.error("Failed to get collections:", error);
    throw error;
  }
}
