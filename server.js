var express = require("express"),
  http = require("http"),
  app = express(),
  toDos = [{
    // set up todo list here by copying
 // the content from todos.OLD.json
      "description": "Get groceries",
      "tags": ["shopping", "chores"]
    },
    {
      "description": "Make up some new ToDos",
      "tags": ["writing", "work"]
    },
    {
      "description": "Prep for Monday's class",
      "tags": ["work", "teaching"]
    },
    {
      "description": "Answer emails",
      "tags": ["work"]
    },
    {
      "description": "Take Gracie to the park",
      "tags": ["chores", "pets"]
    },
    {
      "description": "Finish writing this book",
      "tags": ["writing", "work"]
    }
  ];
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);
// This route takes the place of our
// todos.json file in our example from
// Chapter 5
app.get("/todos.json", function (req, res) {
 res.json(toDos);
});
app.get("/hello", function (req, res) {
 res.send("Hello World!");
});
app.get("/goodbye", function (req, res) {
 res.send("Goodbye World!");
});
