# 📚 Book Notes Application

A full-stack "Node.js, Express, and PostgreSQL–based Book Notes application" that allows users to create, view, edit, delete, and organize book notes.
The project focuses on CRUD operations, database integration, and server-side rendering using EJS.

---

## 📌 Project Overview

The Book Notes Application helps users keep track of books they have read along with personal notes and ratings.

The application:

1. Stores book details in a PostgreSQL database
2. Displays all saved books on the home page
3. Allows sorting books by rating, recency, or alphabetical order
4. Provides full details of a selected book
5. Supports creating, editing, and deleting book notes

---

## ✨ Features (ONLY what your code does)

* 📖 Add a new book with details:

  * Book name
  * ISBN
  * Author
  * Rating
  * Notes
  * Trailer / reference link
* 📝 Edit existing book details
* 🗑️ Delete a book note
* 📚 View all books on the home page
* ⭐ Sort books by rating (descending)
* 🔤 Sort books alphabetically by book name
* 🕒 View books by recency (default order)
* 🔍 View complete details of a book on a separate page
* 🖼️ Display book cover images using ISBN (Open Library Covers API)
* 🖥️ Server-side rendering using EJS templates

---

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js

### Frontend

* EJS (Embedded JavaScript Templates)
* HTML
* CSS

### Database

* PostgreSQL

### Libraries & Tools

* pg – PostgreSQL client for Node.js
* dotenv – environment variable management
* body-parser – handling form submissions

### External API

* Open Library Covers API (for book cover images)

---

## 📁 Project Structure (as per your code)

```
book-notes/
├── index.js                 # Express server & routes
├── package.json
├── package-lock.json
├── .env                     # PostgreSQL credentials
├── .gitignore
│
├── views/                   # EJS templates
│   ├── index.ejs            # Home page (list of books)
│   ├── editPost.ejs         # Add / Edit book page
│   └── completeView.ejs     # Full book details page
│
├── public/                  # Static assets
│   ├── css/
│   └── images/
```

---

## ⚙️ How the Application Works

1. The user opens the home page (`/`) to see all saved books.
2. Books are fetched from the PostgreSQL database and rendered using EJS.
3. Users can:

   * Add a new book using the New Post page
   * Edit an existing book
   * Delete a book
   * View full details of a book
4. Sorting options allow users to:

   * Sort by rating
   * Sort alphabetically
   * View books by recency
5. Book cover images are dynamically generated using the book’s ISBN.

---

## 🔑 Environment Setup

This project uses environment variables for database configuration.

Create a `.env` file in the root directory:

```
PG_USER=your_postgres_username
PG_HOST=localhost
PG_DATABASE=your_database_name
PG_PASSWORD=your_postgres_password
PG_PORT=5432
```

---

## ▶️ How to Run the Project Locally

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install dependencies:

```
npm install
```

4. Set up the PostgreSQL database and create a `books` table with appropriate columns.
5. Create a `.env` file and add your database credentials.
6. Start the server:

```
node index.js
```

7. Open your browser and visit:

```
http://localhost:3001
```

---

## 📌 Important Notes

* PostgreSQL must be running before starting the server.
* The `.env` file is required and should not be committed to version control.
* The application runs on port 3001.
* All rendering is done server-side using EJS.
* Book cover images are fetched using ISBN via Open Library.

---

## 🧠 Key Technical Highlights

* Implemented full CRUD functionality using Express.js
* Integrated PostgreSQL using the `pg` library
* Used parameterized SQL queries to prevent SQL injection
* Implemented server-side sorting using SQL `ORDER BY`
* Dynamically generated book cover image URLs from ISBN
* Maintained clean separation between routes, views, and utilities

---

## 🚀 Future Improvements (optional, clearly marked)

* Add search functionality by book name or author
* Add pagination for large book lists
* Improve UI styling and responsiveness
* Add user authentication
* Add form validation and error handling

---

## 👩‍💻 Author

Sushma Kamuju
Computer Science Graduate | IIT Palakkad, Kerala | Engineer

---

