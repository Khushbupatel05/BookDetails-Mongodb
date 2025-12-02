import express from "express"
import connectDb from './config/db.js'
import Books from "./models/bookModels.js";

const app = express()
const PORT = 5000;

app.set("view engine", 'ejs')
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))
connectDb()


app.get("/", (req, res) => {
    res.render("home");
});


app.get("/add-book", (req, res) => {
    res.render("addBook");
});


app.get("/books", async (req, res) => {
    try {
        const books = await Books.find({});
        res.render("books", { books });
    } catch (error) {
        console.log(error);
    }
});


app.post('/add-book', async (req, res) => {
    const data = req.body
    try {
        const newBook = new Books(data)
        await newBook.save()
        res.redirect('/books') 
    } catch (error) {
        console.log(error)
    }
})


app.get('/edit-book/:id', async (req, res) => {
    try {
        const { id } = req.params
        const editBook = await Books.findById(id)
        res.render('edit', { editBook })
    } catch (error) {
        console.log(error)
    }
})

app.post('/edit-book/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = req.body
        await Books.findByIdAndUpdate(id, book)
        return res.redirect("/books")
    } catch (error) {
        console.log(error)
    }
})


app.get('/delete-book/:deleteId', async (req, res) => {
    try {
        const { deleteId } = req.params
        await Books.findByIdAndDelete(deleteId)
        res.redirect('/books')
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log(`Server is Running on PORT : ${PORT}`)
})