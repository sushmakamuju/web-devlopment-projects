import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("welcome.ejs");
});
app.get("/newPost",(req,res)=>{
  res.render("newPost.ejs");
});
function f()
{
  var result;
  var x= new Date();
  var y=x.getDay();
  switch (y) {
    case 0:
        y = "Sunday";
        break;
    case 1:
        y = "Monday";
        break;
    case 2:
        y = "Tuesday";
        break;
    case 3:
        y = "Wednesday";
        break;
    case 4:
        y = "Thursday";
        break;
    case 5:
        y = "Friday";
        break;
    case 6:
        y = "Saturday";
        break;
    default:
        y = "Invalid day"; // Optional: handle cases where y is not 0-6
        break;
}

  var month=x.getMonth();
  switch (month) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
    default:
        month = "Invalid month"; // Optional: handle cases where month is not 0-11
        break;
}
var hours=x.getHours()+1;
if(hours>12)
  {
    hours=hours-12;
    var t="PM";
  }
var minutes=x.getMinutes()+1;
var date=x.getDate();
result=date+" "+month+", "+hours+" : "+minutes;
if(t)
  {
    result=result+t;
  }else{
    result=result+"AM";
  }
  return result;
}

app.post("/createNewPost",(req,res)=>{
  console.log(req.body);
  var x={heading:req.body.heading,content:req.body.content,date:f(),author:req.body.author};
  if (req.body.type == "programming") {
    programming.push(x);
    res.redirect("/programming");
  } else if (req.body.type == "environment") {
    environment.push(x);
    res.redirect("/environment");
  } else if (req.body.type == "facts") {
    environment.push(x);
    res.redirect("/facts");
  } else if (req.body.type == "health") {
    environment.push(x);
    res.redirect("/health");
  } else if (req.body.type == "history") {
    environment.push(x);
    res.redirect("/history");
  } else if (req.body.type == "movies") {
    environment.push(x);
    res.redirect("/movies");
  } else if (req.body.type == "places") {
    environment.push(x);
    res.redirect("/places");
  } else if (req.body.type == "records") {
    environment.push(x);
    res.redirect("/records");
  } else if (req.body.type == "books") {
    environment.push(x);
    res.redirect("/books");
  }
    
});
app.post("/editOldPost",(req,res)=>{
  console.log(req.body);
  if(req.body.type=="programming"){
    programming[req.body.id].author=req.body.author;
    programming[req.body.id].heading=req.body.heading;
    programming[req.body.id].content=req.body.content;
    res.redirect("/programming");
  }else if (req.body.type == "environment") {
    environment[req.body.id].author=req.body.author;
    environment[req.body.id].heading=req.body.heading;
    environment[req.body.id].content=req.body.content;
    res.redirect("/environment");
  } else if (req.body.type == "facts") {
    facts[req.body.id].author=req.body.author;
    facts[req.body.id].heading=req.body.heading;
    facts[req.body.id].content=req.body.content;
    res.redirect("/facts");
  } else if (req.body.type == "health") {
    health[req.body.id].author=req.body.author;
    health[req.body.id].heading=req.body.heading;
    health[req.body.id].content=req.body.content;
    res.redirect("/health");
  } else if (req.body.type == "history") {
    history[req.body.id].author=req.body.author;
    history[req.body.id].heading=req.body.heading;
    history[req.body.id].content=req.body.content;
    res.redirect("/history");
  } else if (req.body.type == "movies") {
    movies[req.body.id].author=req.body.author;
    movies[req.body.id].heading=req.body.heading;
    movies[req.body.id].content=req.body.content;
    res.redirect("/movies");
  } else if (req.body.type == "places") {
    places[req.body.id].author=req.body.author;
    places[req.body.id].heading=req.body.heading;
    places[req.body.id].content=req.body.content;
    res.redirect("/places");
  } else if (req.body.type == "records") {
    records[req.body.id].author=req.body.author;
    records[req.body.id].heading=req.body.heading;
    records[req.body.id].content=req.body.content;
    res.redirect("/records");
  } else if (req.body.type == "books") {
    books[req.body.id].author=req.body.author;
    books[req.body.id].heading=req.body.heading;
    books[req.body.id].content=req.body.content;
    res.redirect("/books");
  }

});
// for programming 
app.get("/programming",(req,res)=>{
    res.render("programming.ejs",{programming:programming});
});
// try 
app.get("/programming/delete",(req,res)=>{
  programming.splice(req.query.id,req.query.id+1);
  res.redirect("/programming");
});
app.get("/programming/edit/",(req,res)=>{
  res.render("modify.ejs",{ob:programming[req.query.id],id:req.query.id,type:"programming"});
});
// try 
// end programming 
app.get("/books",(req,res)=>{
    res.render("books.ejs",{books:books});
});
// try 
app.get("/books/delete",(req,res)=>{
  books.splice(req.query.id,req.query.id+1);
  res.redirect("/books");
});
app.get("/books/edit/",(req,res)=>{
  res.render("modify.ejs",{ob:books[req.query.id],id:req.query.id,type:"books"});
});
// try 
app.get("/records",(req,res)=>{
    res.render("records.ejs",{records:records});
});
// try 
app.get("/records/delete",(req,res)=>{
  records.splice(req.query.id,req.query.id+1);
  res.redirect("/records");
});
app.get("/records/edit/",(req,res)=>{
  res.render("modify.ejs",{ob:records[req.query.id],id:req.query.id,type:"records"});
});
// try 
app.get("/history",(req,res)=>{
    res.render("history.ejs",{history:history});
});
// try 
app.get("/history/delete",(req,res)=>{
  history.splice(req.query.id,req.query.id+1);
  res.redirect("/history");
});
app.get("/history/edit/",(req,res)=>{
  res.render("modify.ejs",{ob:history[req.query.id],id:req.query.id,type:"history"});
});
// try 
app.get("/facts",(req,res)=>{
    res.render("facts.ejs",{facts:facts});
});
// try 
app.get("/facts/delete",(req,res)=>{
  facts.splice(req.query.id,req.query.id+1);
  res.redirect("/facts");
});
app.get("/facts/edit/",(req,res)=>{
  res.render("modify.ejs",{ob:facts[req.query.id],id:req.query.id,type:"facts"});
});
// try 
app.get("/places",(req,res)=>{
    res.render("places.ejs",{places:places});
});
// try 
app.get("/places/delete",(req,res)=>{
  places.splice(req.query.id,req.query.id+1);
  res.redirect("/places");
});
app.get("/places/edit/",(req,res)=>{
  res.render("modify.ejs",{ob:places[req.query.id],id:req.query.id,type:"places"});
});
// try 
app.get("/health",(req,res)=>{
    res.render("health.ejs",{health:health});
});
// try 
app.get("/health/delete",(req,res)=>{
  health.splice(req.query.id,req.query.id+1);
  res.redirect("/health");
});
app.get("/health/edit/",(req,res)=>{
  res.render("modify.ejs",{ob:health[req.query.id],id:req.query.id,type:"health"});
});
// try 
app.get("/movies",(req,res)=>{
    res.render("movies.ejs",{movies:movies});
});
// try 
app.get("/movies/delete",(req,res)=>{
  movies.splice(req.query.id,req.query.id+1);
  res.redirect("/movies");
});
app.get("/movies/edit/",(req,res)=>{
  res.render("modify.ejs",{ob:movies[req.query.id],id:req.query.id,type:"movies"});
});
// try 
app.get("/environment",(req,res)=>{
    res.render("environment.ejs",{environment:environment});
});
// try 
app.get("/environment/delete",(req,res)=>{
  environment.splice(req.query.id,req.query.id+1);
  res.redirect("/environment");
});
app.get("/environment/edit/",(req,res)=>{
  res.render("modify.ejs",{ob:environment[req.query.id],id:req.query.id,type:"environment"});
});
// try 

var programming = [
    {
      "heading": "Understanding and Implementing Binary Search Trees",
      "content": "Binary Search Trees (BSTs) are a fundamental data structure in computer science, providing efficient methods for data storage, retrieval, and management. A BST is a tree structure where each node has at most two children, commonly referred to as the left and right child. The key property of a BST is that for any given node, all values in the left subtree are less than the node's value, and all values in the right subtree are greater. This property facilitates efficient searching, insertion, and deletion operations, all of which can be performed in O(log n) time on average, where n is the number of nodes in the tree. BSTs are widely used in various applications, including databases, file systems, and in-memory data management, making them an essential tool for any advanced programmer.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Power of Graph Algorithms in Network Analysis",
      "content": "Graphs are a versatile data structure used to model relationships between objects. In computer science, graph algorithms are crucial for solving problems related to network analysis, such as shortest path finding, connectivity, and flow optimization. Algorithms like Dijkstra’s for shortest paths, Kruskal’s and Prim’s for minimum spanning trees, and the Ford-Fulkerson method for maximum flow are fundamental in various applications. These include internet routing, social network analysis, and urban planning. Mastery of graph algorithms allows developers to design efficient solutions for complex network-related problems.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Efficient Data Storage with Hash Tables",
      "content": "Hash tables are a critical data structure for efficient data storage and retrieval. They use a hash function to map keys to specific locations in an array, allowing for average-case O(1) time complexity for insertions, deletions, and lookups. This efficiency makes hash tables ideal for implementing associative arrays, database indexing, and caches. Understanding collision resolution techniques like chaining and open addressing is essential for maintaining performance. Hash tables are a powerful tool for programmers needing fast access to large datasets.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "String Matching Algorithms: From Naive to Knuth-Morris-Pratt",
      "content": "String matching algorithms are essential for tasks such as text search, DNA sequencing, and data mining. The naive string matching algorithm, although simple, can be inefficient for large texts. More advanced algorithms like the Knuth-Morris-Pratt (KMP) algorithm improve efficiency by preprocessing the pattern to create a partial match table, allowing for O(n + m) time complexity, where n is the length of the text and m is the length of the pattern. Mastering these algorithms is crucial for developing applications requiring fast and efficient text processing.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Dynamic Programming: Solving Complex Problems Efficiently",
      "content": "Dynamic programming (DP) is a powerful technique for solving complex problems by breaking them down into simpler subproblems. It is particularly useful for optimization problems and problems with overlapping subproblems. Examples include the Fibonacci sequence, knapsack problem, and shortest path problems. DP uses memoization or tabulation to store intermediate results, reducing redundant calculations and significantly improving efficiency. Understanding DP is essential for tackling a wide range of algorithmic challenges in competitive programming and real-world applications.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Understanding Red-Black Trees for Balanced Data Management",
      "content": "Red-black trees are a type of self-balancing binary search tree that maintain balance through specific properties and rotations. Each node is colored either red or black, and the tree follows rules that ensure it remains balanced, providing O(log n) time complexity for insertion, deletion, and lookup operations. Red-black trees are widely used in database systems and memory management due to their efficiency and reliability in maintaining balanced data. Mastery of red-black trees is crucial for developers working with large and dynamic datasets.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Trie Data Structures: Fast and Efficient String Retrieval",
      "content": "Tries, also known as prefix trees, are specialized tree structures used for efficient string retrieval. Each node in a trie represents a character of a string, and paths from the root to the leaves represent entire strings. Tries are particularly useful for applications like autocomplete, spell checking, and IP routing. They provide fast lookup times, often proportional to the length of the string rather than the number of strings stored. Understanding tries allows developers to implement efficient and scalable string processing solutions.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Leveraging Heap Data Structures for Priority Queues",
      "content": "Heaps are specialized tree-based data structures that satisfy the heap property, where each parent node is greater than or equal to (max-heap) or less than or equal to (min-heap) its children. Heaps are commonly used to implement priority queues, which allow for fast retrieval of the highest or lowest priority element. Operations such as insertion and deletion are performed in O(log n) time. Understanding heaps is essential for tasks such as scheduling, simulation, and implementing efficient algorithms like Dijkstra’s for shortest paths.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Advanced Sorting Algorithms: Quick Sort and Merge Sort",
      "content": "Sorting algorithms are fundamental for organizing and managing data. Quick sort and merge sort are two advanced algorithms known for their efficiency and effectiveness. Quick sort, a divide-and-conquer algorithm, has an average-case time complexity of O(n log n) and is highly efficient for large datasets. Merge sort, also a divide-and-conquer algorithm, guarantees O(n log n) performance and is stable, making it suitable for sorting linked lists and data requiring stable sorting. Mastering these algorithms is crucial for optimizing data handling and improving overall program performance.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Implementing Advanced Graph Traversal Algorithms",
      "content": "Graph traversal algorithms are essential for exploring and analyzing graph structures. Depth-first search (DFS) and breadth-first search (BFS) are the foundational algorithms for traversing graphs. DFS is useful for applications like topological sorting and solving puzzles, while BFS is effective for finding the shortest path in unweighted graphs. Advanced traversal techniques, such as A* and Dijkstra’s algorithm, combine elements of DFS and BFS with heuristics to optimize pathfinding in weighted graphs. Mastering these traversal algorithms is key to solving complex graph-related problems efficiently.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Mastering the Complexity of NP-Hard Problems",
      "content": "NP-Hard problems are a class of computational problems for which no efficient solution algorithm is known. These problems are significant in theoretical computer science and include famous examples like the Traveling Salesman Problem and the Knapsack Problem. Techniques such as approximation algorithms, heuristic methods, and backtracking are used to find near-optimal solutions. Understanding the nature of NP-Hard problems and the strategies to approach them is crucial for tackling some of the most challenging issues in computer science.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    }
  ];
var books=[
    {
      "heading": "Wings of Fire by A.P.J. Abdul Kalam",
      "content": "Wings of Fire is an autobiography of Dr. A.P.J. Abdul Kalam, former President of India and a celebrated aerospace engineer. The book details his journey from a humble beginning in the small town of Rameswaram to becoming one of India's most renowned scientists and the 'Missile Man of India'. It is a tale of resilience, inspiration, and the power of dreaming big.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Atomic Habits by James Clear",
      "content": "Atomic Habits offers a comprehensive guide to breaking bad habits and forming good ones. James Clear presents practical strategies rooted in psychology and neuroscience, emphasizing the importance of small, incremental changes. The book explains how tiny adjustments can lead to significant personal and professional transformation over time.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Art of Living Correctly by Thich Nhat Hanh",
      "content": "The Art of Living Correctly, authored by the renowned Zen master Thich Nhat Hanh, provides insights into living mindfully and ethically. It emphasizes the importance of inner peace, mindfulness, and compassion in leading a fulfilling life. The book is a guide to integrating spiritual practices into daily life, promoting holistic well-being.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Today Is Someday by Deborah Rieves",
      "content": "Today Is Someday is a motivational book that encourages readers to pursue their dreams and aspirations without delay. Deborah Rieves provides practical advice and inspirational stories to help individuals overcome procrastination and take actionable steps towards achieving their goals. It's a call to seize the moment and make the most of every day.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Alchemist by Paulo Coelho",
      "content": "The Alchemist is a novel by Paulo Coelho that tells the story of Santiago, a young shepherd on a journey to find treasure in the Egyptian pyramids. Along the way, he learns about the importance of following his dreams and listening to his heart. The book is a timeless tale of self-discovery and the pursuit of one’s personal legend.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Thinking, Fast and Slow by Daniel Kahneman",
      "content": "Thinking, Fast and Slow by Daniel Kahneman explores the dual systems of thought that drive our decisions: the fast, intuitive, and emotional system, and the slow, deliberate, and logical system. Kahneman, a Nobel laureate in economics, provides insights into how we think, make decisions, and the biases that affect our judgments.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Sapiens: A Brief History of Humankind by Yuval Noah Harari",
      "content": "Sapiens by Yuval Noah Harari is a compelling account of human history, from the emergence of Homo sapiens in the Stone Age to the present. Harari explores how biology and history have defined us and enhanced our understanding of what it means to be 'human'. The book covers major revolutions, including the Cognitive, Agricultural, and Scientific Revolutions.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Becoming by Michelle Obama",
      "content": "Becoming is the memoir of Michelle Obama, the former First Lady of the United States. The book chronicles her life from her childhood on the South Side of Chicago to her years in the White House. Michelle Obama shares her personal experiences, challenges, and triumphs, offering an intimate look into her journey of self-discovery.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Power of Habit by Charles Duhigg",
      "content": "The Power of Habit by Charles Duhigg examines the science behind why habits exist and how they can be changed. Duhigg explains the habit loop—cue, routine, reward—and provides insights into how habits can be transformed to improve our lives. The book is filled with compelling stories and practical advice on harnessing the power of habits for personal and professional success.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The 7 Habits of Highly Effective People by Stephen R. Covey",
      "content": "The 7 Habits of Highly Effective People by Stephen R. Covey is a self-improvement book that outlines seven core principles for personal and professional effectiveness. Covey's holistic approach focuses on character ethics, proactive behavior, and prioritizing tasks. The book provides a framework for achieving long-term success through balanced and principle-centered living.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    }
  ];
var records= [
    {
      "heading": "Longest Distance Swam Without Flippers in Open Sea",
      "content": "The record for the longest distance swam without flippers in open sea is held by Benoît Lecomte, who swam a staggering 3,716 miles (5,980 kilometers) across the Pacific Ocean from Japan to the United States in 1998. This remarkable feat took him a total of 73 days.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Highest Mountain Climbed Without Oxygen",
      "content": "The record for the highest mountain climbed without supplemental oxygen is held by Reinhold Messner and Peter Habeler. They reached the summit of Mount Everest, the world's tallest peak at 29,029 feet (8,848 meters), on May 8, 1978, without using supplemental oxygen tanks.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Fastest Time to Solve a Rubik's Cube",
      "content": "The record for the fastest time to solve a Rubik's Cube is held by Yusheng Du of China, who solved a standard 3x3x3 Rubik's Cube in an astonishing 3.47 seconds at the Wuhu Open 2018 in Wuhu, Anhui, China.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Largest Collection of Pokémon Memorabilia",
      "content": "The largest collection of Pokémon memorabilia belongs to Lisa Courtney from the United Kingdom. As of May 2019, her collection consists of 17,127 items, including toys, cards, clothing, and accessories.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Longest Time Spent Balancing on One Foot",
      "content": "The record for the longest time spent balancing on one foot is held by Arulanantham Suresh Joachim from Sri Lanka. He balanced on one foot for an incredible 76 hours and 40 minutes at the Viharamahadevi Park in Colombo, Sri Lanka, from June 22 to June 25, 1997.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Fastest Time to Type a Text Message on a Touchscreen Mobile Phone Using Swype",
      "content": "The record for the fastest time to type a text message on a touchscreen mobile phone using Swype technology is held by Gaurav Sharma of India. He typed the message 'The razor-toothed piranhas of the genera Serrasalmus and Pygocentrus are the most ferocious freshwater fish in the world. In reality, they seldom attack a human.' in just 17.00 seconds on July 26, 2014.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Longest Beard Ever",
      "content": "The longest beard ever recorded belonged to Hans Langseth from Norway. His beard measured an impressive 17 feet 6 inches (5.33 meters) when it was officially measured after his death in 1927.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Oldest Person Ever",
      "content": "The oldest person ever documented was Jeanne Calment from France. She lived to be 122 years and 164 days old, born on February 21, 1875, and passing away on August 4, 1997.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Longest Time Spent Playing a Video Game Marathon",
      "content": "The record for the longest time spent playing a video game marathon is held by Okan Kaya from Australia. He played the game Call of Duty: Black Ops 2 for an astonishing 135 hours and 50 minutes from November 13 to November 19, 2012.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Most World Records Held by an Individual",
      "content": "The title for the most world records held by an individual is held by Ashrita Furman from the United States. As of January 2022, he has set and broken over 800 official Guinness World Records, covering a wide range of activities and achievements.",
      "date": "19th May, 5:54 PM",
    }];  
var history= [
    {
      "heading": "The Fall of Constantinople",
      "content": "The Fall of Constantinople in 1453 marked the end of the Byzantine Empire and the beginning of the Ottoman Empire's dominance in the region. Mehmed II, the Ottoman Sultan, conquered the city after a siege, leading to significant cultural and geopolitical shifts in Europe and the Middle East.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Declaration of Independence",
      "content": "The Declaration of Independence was adopted by the Continental Congress on July 4, 1776, declaring the thirteen American colonies independent from British rule. Authored primarily by Thomas Jefferson, the document asserted the natural rights of individuals and laid the foundation for the United States of America.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The French Revolution",
      "content": "The French Revolution, which began in 1789, was a period of radical social and political upheaval in France. It led to the overthrow of the monarchy, the establishment of a republic, and the Reign of Terror. The revolution profoundly impacted France and had far-reaching consequences for Europe.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Industrial Revolution",
      "content": "The Industrial Revolution, which began in Britain in the late 18th century, transformed society by introducing mechanized manufacturing, urbanization, and technological advancements. It marked a shift from agrarian economies to industrialized ones, leading to profound social, economic, and cultural changes worldwide.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Partition of India",
      "content": "The Partition of India in 1947 resulted in the creation of two independent nations, India and Pakistan, following the end of British colonial rule. The partition led to widespread violence, displacement, and the largest mass migration in human history, with millions of people uprooted from their homes.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Moon Landing",
      "content": "The Moon Landing on July 20, 1969, was a historic event in which Apollo 11 astronauts Neil Armstrong and Edwin 'Buzz' Aldrin became the first humans to set foot on the lunar surface. Armstrong's famous words, 'That's one small step for man, one giant leap for mankind,' echoed around the world, symbolizing human achievement and exploration.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Berlin Wall Fall",
      "content": "The Fall of the Berlin Wall on November 9, 1989, symbolized the end of the Cold War and the reunification of East and West Germany. The wall, which had divided Berlin since 1961, became a potent symbol of the Iron Curtain. Its collapse paved the way for the reunification of Germany and the eventual dissolution of the Soviet Union.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The September 11 Attacks",
      "content": "The September 11 attacks, also known as 9/11, were a series of coordinated terrorist attacks by the Islamist extremist group al-Qaeda against the United States on September 11, 2001. The attacks resulted in the deaths of nearly 3,000 people and had profound political, economic, and social consequences worldwide.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Arab Spring",
      "content": "The Arab Spring was a series of pro-democracy uprisings that swept across the Middle East and North Africa in the early 2010s. Beginning in Tunisia in late 2010, the movement led to the overthrow of authoritarian regimes in several countries, sparking hopes for political reform and social change.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The COVID-19 Pandemic",
      "content": "The COVID-19 pandemic, caused by the novel coronavirus SARS-CoV-2, emerged in late 2019 and quickly spread globally, leading to unprecedented health, economic, and social challenges. The pandemic has resulted in millions of deaths, disrupted economies, and changed the way people live and interact worldwide.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    }
  ];
var facts=  [
    {
      "heading": "The Great Wall of China",
      "content": "Contrary to popular belief, the Great Wall of China cannot be seen from space with the naked eye. Although it's an impressive architectural feat, its width is not wide enough and its color not distinct enough to be visible from low Earth orbit without aid.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Cleopatra's Lifetime vs. the Moon Landing",
      "content": "Cleopatra VII of Egypt lived closer in time to the construction of the first Pizza Hut than to the building of the Great Pyramid of Giza. Additionally, Cleopatra lived closer to the present day than to the time of the moon landing.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Speed of a Computer Mouse",
      "content": "The average computer mouse can travel around 1.5 miles (2.4 kilometers) in a single day of use. This distance may vary depending on factors such as usage time and mouse sensitivity settings.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The World's Largest Desert",
      "content": "The world's largest desert is not the Sahara Desert, but Antarctica. While the Sahara is the largest hot desert, Antarctica is considered the largest desert overall, as it receives minimal precipitation and has a low average temperature.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Age of the Earth",
      "content": "The Earth is approximately 4.5 billion years old. This estimate is based on radiometric dating of meteorite material and lunar rocks, as well as other geological evidence.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The World's Deepest Ocean Trench",
      "content": "The Mariana Trench in the western Pacific Ocean is the deepest ocean trench in the world, reaching a maximum depth of approximately 36,070 feet (10,994 meters). It is deeper than Mount Everest is tall.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Number of Taste Buds",
      "content": "The average human tongue has around 2,000 to 8,000 taste buds. However, taste bud density varies across individuals and tends to decrease with age.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The World's Longest Recorded Flight of a Chicken",
      "content": "The longest recorded flight of a chicken lasted 13 seconds. This flight occurred in 1945 when a chicken named 'Armando' flew a distance of 301 feet (92 meters) during an experimental flight.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Speed of Light",
      "content": "The speed of light in a vacuum is approximately 299,792 kilometers per second (186,282 miles per second). This universal physical constant plays a crucial role in many aspects of modern physics.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The World's Largest Flower",
      "content": "The Rafflesia arnoldii, native to the rainforests of Sumatra and Borneo, holds the title of the world's largest flower. It can grow up to 3 feet (1 meter) in diameter and weigh up to 15 pounds (7 kilograms).",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    }
  ];
var places=  [
    {
      "heading": "The Grand Canyon, USA",
      "content": "The Grand Canyon in Arizona, USA, is one of the most breathtaking natural wonders on Earth. Carved by the Colorado River over millions of years, it stretches for 277 miles (446 kilometers) and reaches depths of over a mile (1.6 kilometers). Its stunning landscape attracts millions of visitors each year.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Machu Picchu, Peru",
      "content": "Machu Picchu, located in the Andes Mountains of Peru, is an ancient Inca citadel dating back to the 15th century. It is renowned for its remarkable architecture, sophisticated dry-stone walls, and panoramic views. Machu Picchu is a UNESCO World Heritage Site and one of the most iconic archaeological sites in the world.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Great Barrier Reef, Australia",
      "content": "The Great Barrier Reef off the coast of Queensland, Australia, is the largest coral reef system in the world. Stretching over 1,400 miles (2,300 kilometers), it is home to an incredibly diverse ecosystem, including thousands of species of fish, coral, and marine life. It is a UNESCO World Heritage Site and a popular destination for snorkeling and scuba diving.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Santorini, Greece",
      "content": "Santorini is a picturesque island in the Aegean Sea, famous for its stunning sunsets, white-washed buildings, and crystal-clear waters. It is renowned for its volcanic landscape, including its dramatic cliffs, black-sand beaches, and the charming villages of Oia and Fira. Santorini is a popular destination for honeymooners and travelers seeking natural beauty and tranquility.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Serengeti, Tanzania",
      "content": "The Serengeti National Park in Tanzania is one of the most iconic wildlife reserves in Africa. Known for its vast savannahs, diverse ecosystems, and spectacular wildlife migrations, it is home to the Big Five (lion, elephant, buffalo, leopard, and rhinoceros) and numerous other species. The Serengeti offers unparalleled opportunities for safari adventures and wildlife photography.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Angkor Wat, Cambodia",
      "content": "Angkor Wat is a majestic temple complex in Cambodia, built in the early 12th century by the Khmer Empire. It is the largest religious monument in the world and a masterpiece of Khmer architecture. Angkor Wat's intricate carvings, towering spires, and expansive grounds make it a UNESCO World Heritage Site and a symbol of Cambodia's rich cultural heritage.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Amazon Rainforest, South America",
      "content": "The Amazon Rainforest, spanning nine countries in South America, is the largest tropical rainforest in the world. It is home to an incredibly diverse array of flora and fauna, including thousands of plant species, mammals, birds, and insects. The Amazon plays a vital role in regulating the Earth's climate and is often referred to as the 'lungs of the planet'.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Petra, Jordan",
      "content": "Petra is an ancient city carved into the red sandstone cliffs of southern Jordan, dating back to around 300 BCE. It was the capital of the Nabatean Kingdom and served as a major trading hub. Petra's most famous structure is the Treasury, carved into the rock face and featured prominently in films like 'Indiana Jones and the Last Crusade'. It is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Great Wall of China",
      "content": "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Plitvice Lakes National Park, Croatia",
      "content": "Plitvice Lakes National Park is a forest reserve in central Croatia. It is known for a chain of 16 terraced lakes, joined by waterfalls, that extend into a limestone canyon. The park is home to wildlife such as bears, wolves, and rare bird species. It's a popular destination for hiking and exploring the stunning natural landscape.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    }
  ];
  var health= [
    {
      "heading": "The Importance of Regular Exercise",
      "content": "Regular exercise offers numerous health benefits, including improved cardiovascular health, weight management, reduced risk of chronic diseases such as diabetes and hypertension, and enhanced mood and mental well-being. Aim for at least 150 minutes of moderate-intensity exercise or 75 minutes of vigorous-intensity exercise per week, along with muscle-strengthening activities on two or more days a week.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Healthy Eating Habits",
      "content": "Maintaining a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats is essential for overall health and well-being. Limit intake of processed foods, sugary beverages, and excessive salt and saturated fats. Drink plenty of water and practice mindful eating by paying attention to hunger and fullness cues.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Importance of Adequate Sleep",
      "content": "Quality sleep is crucial for physical and mental health. Aim for 7-9 hours of sleep per night for adults, as insufficient sleep can lead to impaired cognitive function, mood disturbances, weakened immune system, and increased risk of chronic diseases such as obesity and diabetes. Create a relaxing bedtime routine and ensure a comfortable sleep environment to promote restful sleep.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Stress Management Techniques",
      "content": "Chronic stress can have detrimental effects on health, increasing the risk of heart disease, obesity, depression, and other health problems. Practice stress-reduction techniques such as deep breathing, meditation, yoga, and mindfulness to promote relaxation and resilience. Engage in hobbies, spend time with loved ones, and prioritize self-care to reduce stress levels.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Benefits of Hydration",
      "content": "Staying hydrated is essential for maintaining optimal health and functioning of the body. Water plays a vital role in digestion, nutrient absorption, temperature regulation, and joint lubrication. Aim to drink at least 8 glasses of water per day, and adjust your intake based on factors such as activity level, climate, and overall health.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Importance of Mental Health",
      "content": "Mental health is as important as physical health for overall well-being. Prioritize activities that promote mental wellness, such as practicing gratitude, seeking social support, engaging in hobbies, and getting professional help when needed. Take breaks, set boundaries, and practice self-compassion to maintain emotional resilience and mental strength.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Preventive Health Screenings",
      "content": "Regular health screenings are essential for early detection and prevention of diseases. Schedule routine check-ups with your healthcare provider to monitor vital signs, assess risk factors, and undergo recommended screenings such as blood pressure, cholesterol, and cancer screenings based on age, gender, and medical history.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Benefits of Sun Protection",
      "content": "Protecting your skin from the sun's harmful UV rays is crucial for reducing the risk of skin cancer and premature aging. Use sunscreen with a high SPF, wear protective clothing, seek shade during peak sun hours, and avoid tanning beds. Remember to reapply sunscreen every two hours, especially after swimming or sweating.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Importance of Vaccinations",
      "content": "Vaccinations are essential for preventing infectious diseases and protecting public health. Stay up to date with recommended vaccines for yourself and your family, including annual flu shots, childhood immunizations, and vaccines for travel or specific health conditions. Vaccines are a safe and effective way to prevent illness and reduce the spread of contagious diseases.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Benefits of Mind-Body Practices",
      "content": "Mind-body practices such as meditation, tai chi, and yoga offer numerous health benefits, including stress reduction, improved mental clarity, and enhanced physical flexibility and strength. Incorporate these practices into your daily routine to promote holistic well-being and cultivate a greater sense of balance and harmony.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    }
  ];
var movies=[
    {
      "heading": "Interstellar",
      "content": "Interstellar is a science fiction film directed by Christopher Nolan, released in 2014. The movie follows a group of astronauts who travel through a wormhole near Saturn in search of a new habitable planet for humanity. It explores themes of space exploration, time dilation, and the survival of the human race. With stunning visuals and a thought-provoking storyline, Interstellar has garnered critical acclaim and a dedicated fan base.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Inception",
      "content": "Inception is a mind-bending thriller directed by Christopher Nolan, released in 2010. The film follows a skilled thief who enters the dreams of others to steal their secrets. It delves into the concept of shared dreaming, subconscious manipulation, and the nature of reality. With its complex narrative structure and visually stunning effects, Inception has become a modern classic and is celebrated for its innovative storytelling.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Martian",
      "content": "The Martian is a science fiction film directed by Ridley Scott, released in 2015. Based on the novel by Andy Weir, the movie follows an astronaut who is mistakenly presumed dead and left behind on Mars. He must use his ingenuity and resourcefulness to survive and signal to Earth that he is alive. The Martian received praise for its realistic portrayal of space exploration and Matt Damon's compelling performance.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Avatar",
      "content": "Avatar is a science fiction epic directed by James Cameron, released in 2009. Set in the mid-22nd century, the film follows a paraplegic Marine dispatched to the moon Pandora on a unique mission. He becomes torn between following his orders and protecting the world he feels is his home. Avatar is known for its groundbreaking visual effects, immersive world-building, and environmental themes.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Shawshank Redemption",
      "content": "The Shawshank Redemption is a drama film directed by Frank Darabont, released in 1994. Based on a novella by Stephen King, the movie tells the story of Andy Dufresne, a banker who is sentenced to life in Shawshank State Penitentiary for a crime he didn't commit. It explores themes of hope, friendship, and redemption. Despite a modest box office performance upon its release, The Shawshank Redemption has since become widely regarded as one of the greatest films of all time.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Godfather",
      "content": "The Godfather is a crime film directed by Francis Ford Coppola, released in 1972. Based on the novel by Mario Puzo, the movie follows the powerful Italian-American crime family of Don Vito Corleone. It explores themes of power, loyalty, and the American Dream. Regarded as one of the greatest films in world cinema, The Godfather has had a profound impact on popular culture and is known for its iconic performances and memorable quotes.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Pulp Fiction",
      "content": "Pulp Fiction is a neo-noir crime film directed by Quentin Tarantino, released in 1994. Known for its nonlinear narrative and eclectic ensemble cast, the movie weaves together multiple interconnected stories involving crime, violence, and redemption. Pulp Fiction received widespread critical acclaim for its bold storytelling, stylish direction, and memorable dialogue, cementing Tarantino's reputation as a visionary filmmaker.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Forrest Gump",
      "content": "Forrest Gump is a comedy-drama film directed by Robert Zemeckis, released in 1994. Based on the novel by Winston Groom, the movie follows the life of Forrest Gump, a kind-hearted and simple-minded man from Alabama who unwittingly becomes involved in several defining events of the 20th century. With its heartwarming story, memorable characters, and iconic soundtrack, Forrest Gump has captivated audiences around the world.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Dark Knight",
      "content": "The Dark Knight is a superhero film directed by Christopher Nolan, released in 2008. The second installment in Nolan's Batman trilogy, the movie follows Batman as he faces off against the Joker, a sadistic criminal mastermind wreaking havoc on Gotham City. The Dark Knight is praised for its gripping storyline, Heath Ledger's iconic portrayal of the Joker, and its exploration of complex moral themes.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "The Lord of the Rings: The Fellowship of the Ring",
      "content": "The Lord of the Rings: The Fellowship of the Ring is a fantasy epic directed by Peter Jackson, released in 2001. Based on the novel by J.R.R. Tolkien, the film follows Frodo Baggins and his companions as they embark on a perilous journey to destroy the One Ring and defeat the Dark Lord Sauron. The Fellowship of the Ring received critical acclaim for its stunning visuals, epic storytelling, and groundbreaking special effects.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    }
  ];
var environment=[
    {
      "heading": "Climate Change",
      "content": "Climate change refers to long-term shifts in temperature, precipitation patterns, and other atmospheric conditions on Earth. It is primarily driven by human activities, such as the burning of fossil fuels, deforestation, and industrial processes, which release greenhouse gases into the atmosphere. Climate change has widespread impacts on ecosystems, weather patterns, sea levels, and biodiversity, leading to phenomena such as more frequent and intense heatwaves, storms, and wildfires.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Deforestation",
      "content": "Deforestation is the clearing of forests for agriculture, logging, urbanization, and other human activities. It leads to habitat loss, soil erosion, disruption of ecosystems, and loss of biodiversity. Deforestation also contributes to climate change by releasing carbon dioxide stored in trees into the atmosphere. Conservation efforts, reforestation initiatives, and sustainable land management practices are essential for mitigating the impacts of deforestation and preserving forest ecosystems.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Ocean Pollution",
      "content": "Ocean pollution involves the contamination of marine environments with pollutants such as plastic debris, chemical runoff, oil spills, and untreated sewage. It poses significant threats to marine ecosystems, wildlife, and human health. Plastic pollution, in particular, is a major concern, with millions of tons of plastic waste entering the oceans each year, harming marine life and disrupting marine food chains. Efforts to reduce plastic consumption, improve waste management, and protect marine habitats are crucial for addressing ocean pollution.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Air Pollution",
      "content": "Air pollution refers to the presence of harmful substances, such as particulate matter, nitrogen oxides, sulfur dioxide, and volatile organic compounds, in the air we breathe. It is primarily caused by vehicle emissions, industrial activities, agricultural practices, and fossil fuel combustion. Air pollution can have serious health impacts, including respiratory diseases, cardiovascular problems, and premature death. Implementing cleaner energy sources, improving vehicle emissions standards, and promoting sustainable transportation are essential for reducing air pollution and safeguarding public health.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Water Scarcity",
      "content": "Water scarcity occurs when the demand for freshwater exceeds the available supply, leading to insufficient access to clean water for drinking, sanitation, agriculture, and industry. It is exacerbated by factors such as population growth, climate change, pollution, and inefficient water management practices. Water scarcity poses significant challenges to human health, food security, and economic development, particularly in arid and semi-arid regions. Sustainable water conservation measures, improved infrastructure, and equitable distribution policies are essential for addressing water scarcity and ensuring water security for all.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Biodiversity Loss",
      "content": "Biodiversity loss refers to the decline in the variety and abundance of plant and animal species in ecosystems worldwide. It is primarily driven by habitat destruction, overexploitation, pollution, invasive species, and climate change. Biodiversity loss has far-reaching consequences for ecosystem functioning, food security, medicine, and human well-being. Conservation efforts, protected areas, sustainable resource management, and restoration projects are critical for mitigating biodiversity loss and preserving Earth's natural heritage.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Renewable Energy",
      "content": "Renewable energy sources, such as solar, wind, hydroelectric, and geothermal power, offer sustainable alternatives to fossil fuels and nuclear energy. They produce minimal greenhouse gas emissions, reduce reliance on finite resources, and promote energy independence and security. Transitioning to renewable energy is essential for mitigating climate change, reducing air and water pollution, and fostering a more sustainable and resilient energy system. Investment in renewable energy infrastructure, research, and policy support is crucial for accelerating the transition to a low-carbon economy.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Waste Management",
      "content": "Effective waste management is essential for reducing environmental pollution, conserving resources, and promoting circular economy principles. It involves processes such as waste reduction, recycling, composting, and proper disposal of hazardous materials. Inadequate waste management leads to pollution of land, water, and air, as well as negative impacts on human health and ecosystems. Adopting sustainable waste management practices, promoting recycling and reuse, and minimizing single-use plastics are key strategies for addressing the global waste crisis.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Climate Action",
      "content": "Climate action encompasses efforts to mitigate and adapt to the impacts of climate change through policies, technologies, and behavioral changes. It involves reducing greenhouse gas emissions, transitioning to renewable energy, protecting natural ecosystems, and building climate resilience in vulnerable communities. Climate action is crucial for avoiding the most catastrophic consequences of climate change and ensuring a sustainable future for current and future generations. International cooperation, ambitious targets, and equitable solutions are essential for addressing the global climate crisis.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    },
    {
      "heading": "Environmental Conservation",
      "content": "Environmental conservation involves the protection and preservation of natural resources, ecosystems, and biodiversity for present and future generations. It encompasses efforts to restore degraded habitats, prevent habitat destruction, and promote sustainable land and resource management practices. Environmental conservation is essential for maintaining ecosystem services, supporting biodiversity, and safeguarding the health and well-being of people and planet. Public awareness, policy support, and community engagement are key drivers of successful environmental conservation initiatives.",
      "date": "19th May, 5:54 PM",
      "author": "Sushma Kamuju"
    }
  ];  
  app.listen(port,()=>{
    console.log(`server running on the port ${port}`);
});