// app.js
const Biblioteca = require('./biblioteca');
// Criando uma nova biblioteca
const minhaBiblioteca = new Biblioteca();


// Adicionando alguns livros
minhaBiblioteca.adicionarLivro({ titulo: 'O Hobbit', autor: 'J.R.R. Tolkien' });
minhaBiblioteca.adicionarLivro({ titulo: '1984', autor: 'George Orwell' });
minhaBiblioteca.adicionarLivro({ titulo: 'A Menina que Roubava Livros', autor: 'Markus Zusak' });
// Listando os livros
minhaBiblioteca.listarLivros();
// Removendo um livro
minhaBiblioteca.removerLivro(1);


// Listando os livros após a remoção
minhaBiblioteca.listarLivros();
