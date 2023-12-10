const { string } = require("yup");
const Chat = require("../model/chat");

async function add(mesg) {
  try {
    const chat = new Chat({
      name: string,
      message: mesg,
      date: new Date(),
    });

    await chat.save();
    res.send("chat add");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { add };
