/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");
const bodyParser = require('body-parser');

// file stream
const fs = require('fs');

// import models so we can interact with the database
const User = require("./models/user");
const Product = require("./models/product");

// provide utilities for working with file and directory paths
const path = require("path");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socket = require("./server-socket");

// Message schema for MongoDB
const Message = require("./models/message");

// Google Bucket initialization
const {Storage} = require("@google-cloud/storage");
const gc = new Storage( {
  keyFilename: path.join(__dirname, "../Chrysan-76a4a9873c6b.json"),
  projectId: "chrysan-1579284747809",
});
const chrysanBucket = gc.bucket('chrysan-bucket');

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socket.addUser(req.user, socket.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// get active users to display in chatbook
router.get("/activeUsers", (req, res) => {
  res.send({ activeUsers: socket.getAllConnectedUsers() });
});

// get user name
router.get("/user", (req, res) => {
  User.findById(req.query.userId).then((user) => {
    res.send(user);
  });
});

// get all products
router.get("/products", (req, res) => {
  Product.find({}).then((products) => res.send(products))
})

// get single product
router.get("/singleproduct", (req, res) => {
  Product.findOne(req.query).then((product) => {
    product = product._id.toString();
    res.send(product);
  });
  //Product.findById(req.query.productId).then((product) => res.send(product))
})

// post product
router.post("/product", (req, res) => {
  const newProduct = new Product({
    seller: {
      _id: req.user._id,
      name: req.user.name,
    },
    product_name: req.body.product_name,
    price: req.body.price,
    description: req.body.description,
    imageURL: req.body.imageURL,
  });
  newProduct.save().then((product) => res.send(product));
})

router.get("/chat", (req, res) => {
  let query;
  if (req.query.recipient_id === "ALL_CHAT") {
    // get any message sent by anybody to ALL_CHAT
    query = { "recipient._id": "ALL_CHAT" };
  } else {
    // get messages that are from me->you OR you->me
    query = {
      $or: [
        { "sender._id": req.user._id, "recipient._id": req.query.recipient_id },
        { "sender._id": req.query.recipient_id, "recipient._id": req.user._id },
      ],
    };
  }

  Message.find(query).then((messages) => res.send(messages));
})

router.post("/message", auth.ensureLoggedIn, (req, res) => {
  console.log(`Received a chat message from ${req.user.name}: ${req.body.content}`);

  // insert this message into the database
  const message = new Message({
    recipient: req.body.recipient,
    sender: {
      _id: req.user._id,
      name: req.user.name,
    },
    content: req.body.content,
  });
  message.save();

  if (req.body.recipient._id == "ALL_CHAT") {
    socket.getIo().emit("message", message);
  } else {
    console.log("before socket emit");
    socket.getSocketFromUserID(req.body.recipient._id).emit("message", message);
    socket.getSocketFromUserID(req.user._id).emit("message", message);
    console.log("after socket emit");
  }

  res.send({message: req.body.content});
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
