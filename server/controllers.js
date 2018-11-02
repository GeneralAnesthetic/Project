var JWT = require("jsonwebtoken");
var SnippetModel = require("./models");
var {
  JWT_SECRET
} = require("../client/src/components/Configuration/Config.js");

signToken = user => {
  return JWT.sign(
    {
      sub: user_id
    },
    JWT_SECRET
  );
};
// Put UserModel above
// const User = {
//   login(req, res) {},
//   signup(req, res) {}
// };

const Snippet = {
  addNew(req, res) {
    const title = req.body.title;
    // const description = req.body.description;
    const code = req.body.snippet;
    console.log("in add new ------------------------------->");
    console.log(req.body, "body>>>>");
    const snippet = new SnippetModel({ title, code });
    snippet.save((err, newSnippet) => {
      if (err) {
        res.status(500).json({ error: "Server Error" });
      } else {
        res.status(200).json(newSnippet);
      }
    });
  },
  remove(req, res) {
    SnippetModel.deleteOne({ _id: req.params.snippetId })
      .then(snippet => {
        res.status(200).json(snippet);
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong" });
      });
  },
  getSingle(req, res) {
    const snippetId = req.params.snippetId;
    SnippetModel.findById(snippetId, (err, snippet) => {
      if (err) {
        res
          .status(500)
          .json({ Error: "Something went wrong with your request" });
      } else if (!snippet) {
        res
          .status(404)
          .json({ message: "Snippet not found or does not exist" });
      } else {
        res.status(200).json(snippet);
      }
    });
    // console.log(snippetId, "snippetId");
  },
  getAll(req, res) {
    console.log("HELLO");
    SnippetModel.find({})
      .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json({ message: "Something went wrong!" }));
  },
  update(req, res) {
    SnippetModel.updateOne({ _id: req.params.snippetId }, req.body)
      .then(snippet => {
        res.status(200).json(snippet);
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong" });
      });
  },

  signUp: async (req, res, next) => {
    const { email, password } = req.value.body;

    const foundUser = await SnippetModel.findOne({ email });
    if (foundUser) {
      return res.status(403).json({ error: "Email Already in Use!" });
    }

    const newUser = new SnippetModel({ email, password });
    await newUser.save();
    // res.json({user: "Created!"});

    const token = signToken(newUser);

    res.status(200).json({ token });
  },
  signIn: async (req, res, next) => {
    const token = signToken(req.user);
    res.status(200).json({ token });
  },
  secret: async (req, res, next) => {
    res.json({ secret: "secret" });
  }
};

module.exports = {
  Snippet
};
