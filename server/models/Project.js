import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task", // Reference to the Task model
      },
    ],
  }, { timestamps: true });
  
  const Project = mongoose.model("Project", projectSchema);