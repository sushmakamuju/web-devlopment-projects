# 📚 Book Notes Application

A full-stack "Node.js and Express-based Book Notes application" that allows users to store, manage, and view notes for books they read.
The project demonstrates CRUD operations, backend routing, database integration, and server-side rendering using EJS.

---

## 📌 Project Overview

The "Book Notes Application" helps users maintain structured notes for the books they read.
Users can add book details, write personal notes, update or delete them, and view all saved notes in an organized manner.

The application:

1. Accepts book-related input from the user
2. Stores and retrieves data from a database
3. Processes data on the backend
4. Dynamically renders book notes on the UI

---

## ✨ Features

* 📖 Add book details (title, author, genre, etc.)
* 📝 Write and save personal notes for each book
* ✏️ Edit existing book notes
* 🗑️ Delete book notes
* 📚 View a list of all saved books
* 🕒 Track reading dates or timestamps
* 🖥️ Server-side rendered UI using EJS

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

* PostgreSQL / SQLite / MongoDB *(choose based on your project)*

### Libraries & Tools

* dotenv – for environment variable management
* body-parser – for handling form submissions
* pg / mongoose / sqlite3 – database integration

---

## 📁 Project Structure

```
book-notes/
├── index.js                     # App entry point (Express server)
├── package.json
├── package-lock.json
├── .env                         # Environment variables
├── .gitignore
│
├── views/                       # EJS templates
│   ├── home.ejs                 # Home page / book list
│   ├── addBook.ejs              # Add new book note
│   ├── editBook.ejs             # Edit existing note
│   └── partials/                # Reusable UI components
│       ├── header.ejs
│       └── footer.ejs
│
├── public/                      # Static assets
│   ├── css/
│   └── images/
│
├── routes/                      # Route handlers
│   └── bookRoutes.js            # CRUD routes
│
├── services/                    # Database logic
│   └── bookService.js           # DB queries
│
├── utils/                       # Helper logic
│   └── formatDate.js            # Date formatting
```

---

## ⚙️ How the Application Works

1. The user opens the application and sees a list of saved book notes.
2. The user can add a new book using a form.
3. The server receives form data via POST requests.
4. Book details and notes are stored in the database.
5. The server fetches stored data and processes it if needed.
6. Data is passed to EJS templates and rendered dynamically.
7. Users can edit or delete book notes at any time.

---

## 🔑 Environment Setup

This project uses environment variables to manage sensitive configuration.

Create a `.env` file in the root directory:

```
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_password
DB_NAME=booknotes
DB_PORT=5432
```


## ▶️ How to Run the Project Locally

1. Clone the repository or download the source code.
2. Navigate to the project directory.
3. Install dependencies:

```
npm install
```

4. Create a `.env` file and configure database credentials.
5. Start the server:

```
node index.js
```

6. Open your browser and visit:

```
http://localhost:3000
```

---

## 📌 Important Notes

* `.env` file is required and should not be committed to GitHub.
* The application runs on port `3000` by default.
* Uses "server-side rendering" instead of a frontend framework.
---

## 🧠 Key Technical Highlights

* Implemented CRUD operations using Express.js
* Handled form submissions with POST and PUT routes
* Integrated database queries for persistent storage
* Used EJS templates for dynamic rendering
* Organized backend logic using services and routes
* Maintained clean project structure and separation of concerns

---

## 🚀 Future Improvements

* Add authentication for multiple users
* Add book cover images using external APIs
* Implement search and filter functionality
* Add tags or categories for notes
* Improve UI and responsiveness
* Add unit and integration tests

---

## 👩‍💻 Author

Sushma Kamuju
Computer Science Graduate | IIT Palakkad, Kerala | Engineer

---

