const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const collection = {
  collectionName: "User",
};

const userSchema = new Schema(
  {
    passwordHash: {
      type: String,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: true,
      default: false,
    },
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
