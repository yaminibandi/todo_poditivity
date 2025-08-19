import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
console.log(dotenv.config());

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

const todoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    done: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema); //todos

//Routes (CRUD)
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetched todos" });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const { name, done } = req.body;
    const todo = new Todo({ name, done });
    await todo.save();
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo" });
  }
});

app.patch("/todos/:id", async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ error: "Todo not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
