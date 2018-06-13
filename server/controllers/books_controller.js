let books = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(books);  
    },

    create: (req, res) => {
        const {title, author} = req.body;
        let book = {
            id: id,
            title: title,
            author:author

         }
         books.push(book);
         id++;
         res.status(200).send(books)
    },

    update: (req, res) => {
        for(i = 0; i < books.length; i++) {
            if(books[i].id === Number(req.params.id)){
               books[i].title = req.body.title;
               books[i].author = req.body.author;
            }
        } 
        console.log(books)
        res.status(200).send(books);
    },

    delete: (req, res) => {
        for(i = 0; i < books.length; i++) {
            if(books[i].id === Number(req.params.id)){
                books.splice(i, 1)
            }
            res.status(200).send(books)
        }
    }
}    
           
       