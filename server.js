// // const express = require("express");
// const mongoose = require("mongoose");

// import express from 'express'
// import mongoose from 'mongoose'

// // Connect to your MongoDB database
// mongoose.connect("mongodb://localhost/habit-tracker");

// // Define a schema for your habits collection
// const habitSchema = new mongoose.Schema({
//   id: Number,
//   name: String
// });

// // Define a model for your habits collection
// const Habit = mongoose.model("Habit", habitSchema);

// // Create an Express app
// const app = express();

// // Define an endpoint to get all habits
// app.get("/habits", async (req, res) => {
//   try {
//     const habits = await Habit.find();
//     res.send(habits);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// });

// // Define an endpoint to update a habit
// app.put("/habits/:id", async (req, res) => {
//   try {
//     const habit = await Habit.findByIdAndUpdate(
//       req.params.id,
//       { $inc: { count: 1 } },
//       { new: true }
//     );
//     res.send(habit);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error.message);
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });
