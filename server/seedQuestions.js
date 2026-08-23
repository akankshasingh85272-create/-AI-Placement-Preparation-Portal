require("dotenv").config();

const mongoose = require("mongoose");
const CodingQuestion = require("./models/CodingQuestion");

const questions = [
  {
    topic: "Arrays",
    question: "Find the largest element in an array.",
    difficulty: "Easy",
  },
  {
    topic: "Arrays",
    question: "Find the second largest element in an array.",
    difficulty: "Easy",
  },
  {
    topic: "Arrays",
    question: "Reverse an array without using another array.",
    difficulty: "Medium",
  },
  {
    topic: "Strings",
    question: "Check whether a string is a palindrome.",
    difficulty: "Easy",
  },
  {
    topic: "Strings",
    question: "Reverse a string.",
    difficulty: "Easy",
  },
  {
    topic: "Strings",
    question: "Count the number of vowels in a string.",
    difficulty: "Easy",
  },
  {
    topic: "Linked List",
    question: "Create a singly linked list.",
    difficulty: "Easy",
  },
  {
    topic: "Linked List",
    question: "Reverse a linked list.",
    difficulty: "Medium",
  },
  {
    topic: "Linked List",
    question: "Find the middle element of a linked list.",
    difficulty: "Medium",
  },
  {
    topic: "Stack & Queue",
    question: "Implement a stack using an array.",
    difficulty: "Easy",
  },
  {
    topic: "Stack & Queue",
    question: "Implement a queue using an array.",
    difficulty: "Easy",
  },
  {
    topic: "Stack & Queue",
    question: "Check whether parentheses are balanced.",
    difficulty: "Medium",
  },
];

const seedQuestions = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    await CodingQuestion.deleteMany({});

    await CodingQuestion.insertMany(questions);

    console.log("Coding questions added successfully!");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error adding questions:", error);
  }
};

seedQuestions();