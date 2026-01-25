import express from "express";
import pg from "pg";
import ejs from "ejs";
import bodyparser from "body-parser";
import env from "dotenv";
env.config();
const port=3001;
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
const db=new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});
db.connect();
// ***this will show the front page of the website, showing all the posts *** 
app.get("/",async(req,res)=>{
    const books=await db.query("select * from books");
    res.render("index.ejs",{books:books.rows,url:urls(books.rows)});
});
//*** displays the all the posts in the order of ratings in ascending order ***
app.get("/rating",async(req,res)=>{
    const books=await db.query("select * from books order by rating desc");
    res.render("index.ejs",{books:books.rows,url:urls(books.rows)});
});
//*** displays the all the posts in the order of recency ***
app.get("/recency",async(req,res)=>{
    const books=await db.query("select * from books ");
    res.render("index.ejs",{books:books.rows,url:urls(books.rows)});
});
//*** displays the all the posts in the order of alphatical order ***
app.get("/alphabaticalOrder",async(req,res)=>{
    const books=await db.query("select * from books order by name");
    res.render("index.ejs",{books:books.rows,url:urls(books.rows)});
});
// ***this will take you to a page called "editPost.ejs" where you can enter the values ***
app.get("/newPost",(req,res)=>{
    res.render("editPost.ejs",{newPost:true});
});

//*** the values entered by you will be saved and a new post will be created 
// and inserted into database ***
app.post("/createNewPost",async(req,res)=>{
    await db.query("insert into books (name,isbn,trailer,notes,author,rating) values ($1,$2,$3,$4,$5,$6)",[req.body.bookName,req.body.isbn,req.body.trailer,req.body.notes,req.body.author,req.body.rating]);
    res.redirect("/");
});

// *** this will let you go to new page which shows complete details of book
// here "book" = all the details of that particular book ***
app.post("/completeView",async(req,res)=>{
    const book=await db.query("select * from books where id=$1",[req.body.id]);
    res.render("completeView.ejs",{book:book.rows[0],imgSrc:url(book.rows[0].isbn)});
});

// for deleting a existing post

app.post("/delete",async(req,res)=>{
    console.log(req.body);
    await db.query("delete from books where id=$1",[req.body.id]);
    res.redirect("/");
});

app.post("/edit",async(req,res)=>{
   var x= await db.query("select * from books where id=$1",[req.body.id]);
    x=x.rows;
    res.render("editPost.ejs",{book:x[0]});
});
app.post("/updatePost",async(req,res)=>{
    // console.log(req.body.isbn);
    if(req.body.typeOfUpdate=="insert"){
        await db.query("insert into books (name,isbn,trailer,notes,author,rating) values ($1,$2,$3,$4,$5,$6)",[req.body.name,req.body.isbn,req.body.trailer,req.body.notes,req.body.author,req.body.rating]);
    }else{
    await db.query("update books set name=$1,notes=$3,trailer=$4,author=$5,rating=$6,isbn=$7 where id=$2",[req.body.name,req.body.id,req.body.notes,req.body.trailer,req.body.author,req.body.rating,req.body.isbn]);
    }
    res.redirect("/");
});
app.listen(port,()=>{
    console.log(`listening on the port ${port}`);
});

function urls(x)
{
    var result=[];
    var url="https://covers.openlibrary.org/b/isbn/{key}-M.jpg"
    for(var i=0;i<x.length;i++)
        {
            result.push(url.replace("{key}",x[i].isbn));
        }
        return result;
}
// getting image url basing on the isbn of the book provided 
function url(y)
{
        var url="https://covers.openlibrary.org/b/isbn/{key}-M.jpg"
         url=url.replace("{key}",y);
        return url;
}