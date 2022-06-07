const mogoose = require("mongoose");
const ClientSchema = new mogoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = mogoose.model("Client", ClientSchema);
