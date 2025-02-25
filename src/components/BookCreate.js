import { useState } from 'react';
import '../index.css';

function BookCreate({ onCreate }) {
	const [title, setTitle] = useState('');

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onCreate(title);
		setTitle('');
	};

	return <div className="book-create">
		Add new Book
		<form onSubmit = {handleSubmit}>
			<lable>Title</lable>
			<input className="input" type="text" value={title} onChange={handleChange} />
			<button className="button" type="submit">Add</button>
		</form>
	</div>;
}

export default BookCreate;
