/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Product = require("./models/product");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socket = require("./server-socket");

const Message = require("./models/message");

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

// get user name
router.get("/user", (req, res) => {
  User.findById(req.query.userId).then((user) => {
    res.send(user);
  })
});

// get all products
router.get("/products", (req, res) => {
  Product.find({}).then((products) => res.send(products))
})

// post product
router.post("/product", (req, res) => {
  const newProduct = new Product({
    // seller: {
    //   _id: req.user._id,
    //   name: req.user.name,
    // },
    product_name: req.body.product_name,
    price: req.body.price,
  });
  newProduct.save().then((product) => res.send(product))

})
router.get("/chat", (req, res) => {
  const query = {"recipient._id": "ALL_CHAT"};
  Message.find(query).then((messages) => res.send(messages));
})

router.post("/message", auth.ensureLoggedIn, (req, res) => {
  console.log(`Received a chat message from ${req.user.name}: ${req.body.content}`);
  console.log("hit");

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
  socket.getIo().emit("message", message);
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
