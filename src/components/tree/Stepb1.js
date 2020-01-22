import React from 'react';
import Stepb2 from './Stepb2';
import BookContextProvider from '../../contexts/BookContext';

const Stepb1 = () => {
    return (
        <div>
            This is step b 1
            Under is step b 2
            <BookContextProvider>
                <Stepb2 />
            </BookContextProvider>
        </div>
    )
}

export default Stepb1;