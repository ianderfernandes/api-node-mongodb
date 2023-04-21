import mongoose from "mongoose";

mongoose.connect("mongodb+srv://iander:iander2001@api-alura.t88y32l.mongodb.net/api-node-mongodb");

let db = mongoose.connection;

export default db;