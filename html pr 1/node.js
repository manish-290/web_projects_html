// //require function import the file system fs to read a file
// const fs = require('fs');

// fs.readFile('myfile.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// const { MongoClient } = require('mongodb');

// // MongoDB connection URL
// const url = 'mongodb://localhost:27017'; // Replace with your MongoDB server URL

// // Database Name
// const dbName = 'mydatabase'; // Replace with your database name

// // Create a new MongoClient
// const client = new MongoClient(url, { useUnifiedTopology: true });

// // Connect to the MongoDB server
// client.connect()
//     .then(() => {
//         console.log('Connected to MongoDB server');
//         const db = client.db(dbName);

//         // Now you can perform database operations using 'db'

//         // Example: Insert a document into a collection
//         db.collection('mycollection').insertOne({ name: 'John' })
//             .then(result => {
//                 console.log('Inserted document with _id:', result.insertedId);
//             })
//             .catch(error => {
//                 console.error('Error inserting document:', error);
//             })
//             .finally(() => {
//                 // Close the MongoDB connection when done
//                 client.close();
//             });
//     })
//     .catch(error => {
//         console.error('Error connecting to MongoDB:', error);
//     });


