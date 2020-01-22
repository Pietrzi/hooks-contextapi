import React, { useContext } from 'react'; 
import { BookContext } from '../../contexts/BookContext';

const Stepa2 = () => {
    const { books } = useContext(BookContext)
    return (
        <div>
            This is step a 2
            {books.map(book => {
                return (
                    <div key={book.id}>
                        <p>{book.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Stepa2;