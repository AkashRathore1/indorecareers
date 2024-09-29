import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let books = [
    { id: 1, title: '1984' },
    { id: 2, title: 'To Kill a Mockingbird' },
];

// Get all books
app.get('/books', (req, res) => {
    res.json(books);
});

// Get a book by ID
app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// Create a new book
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        book.title = req.body.title;
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
