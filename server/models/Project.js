const mogoose = require("mongoose");
const ProjectSchema = new mogoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mogoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = mogoose.model("Project", ProjectSchema);
