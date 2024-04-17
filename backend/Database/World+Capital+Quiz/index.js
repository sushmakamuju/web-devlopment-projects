import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
let capitals;
const app = express();
const port = 3000;
const db=new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:"sushma",
  port:5432,
  });
  db.connect();
  db.query("SELECT * from capitals",(err,res)=>{
    if(err)
    {
      console.log("error while executing this query:",err.stack);
    }else
    {
      quiz=res.rows;
    }
    db.end();
  });
  
let quiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "New York" },
];

let totalCorrect = 0;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));//linking all the static files 

let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new postw
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false; //why this
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,//why this
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// my tasks
// 1 read data from database 
// 2 an country name should be displayed at random


