import {Schema, model} from "mongoose";

const projectSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task", // Reference to the Task model
      },
    ],
  }, { timestamps: true });
  
  const Project = model("Project", projectSchema);

  export default Project