const express = require('express');
const app = express();

app.use(express.json());

let books = [];

// CREATE
app.post('/api/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.status(201).json({ message: "Book created", data: book });
});

// READ (All)
app.get('/api/books', (req, res) => {
    res.status(200).json({ data: books });
});

// UPDATE
app.put('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: "Book not found" });

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    res.status(200).json({ message: "Book updated", data: book });
});

// DELETE
app.delete('/api/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: "Book not found" });

    books.splice(index, 1);
    res.status(200).json({ message: "Book deleted" });
});

module.exports = app;