import mysql from "mysql2"


export const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "secret123",
    database: "expense_mern"
})

db.connect(function(err) {
     if (err) {
       console.log(err);
     } else {
       console.log("Database connected");
     }
})