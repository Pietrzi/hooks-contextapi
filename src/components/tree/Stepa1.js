import React, { useContext } from 'react';
import Stepa2 from './Stepa2';
import { BookContext } from '../../contexts/BookContext';
import BookContextProvider from '../../contexts/BookContext';

const Stepa1 = () => {
    const { books } = useContext(BookContext)
    return (
        <div>
            This is step a 1
            Under is step a 2
            <BookContextProvider>
                <Stepa2 />
            </BookContextProvider>
        </div>
    )
}

export default Stepa1;