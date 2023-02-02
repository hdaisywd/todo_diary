const mongoose = require("mongoose");
const { Schema } = mongoose;


const TodoSchema = new mongoose.Schema(
{
  todo: {
    type: String,
    required: true,
    timestamps: true,
  },
  due_date: {
    type: String,
    required: true,
  }
}
);

module.exports = new mongoose.model("Todos", TodoSchema, "Todos");



//시간 저장
//enrolled:
    //type: Date,
    //default: Date.now
//혹은 이렇게 해주면 됨 
//timestamps: true