import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
	let [books, setBooks] = useState([]);

	const editBookById = (id, newTitle) => {
		const updatedBooks = books.map((book) => {
			if(book.id === id) {
				return { ...book, title: newTitle }
			}
			return book;
		});

		setBooks(updatedBooks);
	};

	const deleteBookById = (id) => {
		console.log('on delete', id);
		const updatedBooks = books.filter((book) => {
			return book.id !== id
		});

		setBooks(updatedBooks);
	};

	// add event handler
	const createBook = (title) => {
		const updatedBooks = [
			...books,
			{
				id: Math.round(Math.random() * 9999),
				title 
			}
		];

		setBooks(updatedBooks);
	}

	return ( 
	<div className="app">
		<BookList 
			onEdit={editBookById}
			books={books}
			onDelete={deleteBookById}
		/>

		<BookCreate onCreate={createBook} />
	</div>
	)
}

export default App;
