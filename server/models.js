var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const SnippetSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  description: String,

  code: String
});

SnippetSchema.pre("save", async function(next) {
  try {
    const salt = await bycrpt.genSalt(10);
    const passwordHash = await bycrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
});
SnippetSchema.methods.isValidPassword = async function(newPasswords) {
  try {
    return await bycrpt.compare(newPasswords, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

// This creates our model from the above schema, using mongoose's model method
const Snippet = mongoose.model("Snippet", SnippetSchema);

// Export the Note model
module.exports = Snippet;
