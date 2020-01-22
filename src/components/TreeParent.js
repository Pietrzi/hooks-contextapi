import React, { useContext } from 'react';
import Stepa1 from './tree/Stepa1';
import Stepb1 from './tree/Stepb1';
import BookContextProvider from '../contexts/BookContext';
import { BookContext } from '../contexts/BookContext';

const TreeParent = () => {
    const { books } = useContext(BookContext)
    return (
        <div>
            <h2>This is parent</h2>
            This is tree a:
            <BookContextProvider>
            <Stepa1 />
            </BookContextProvider>
            This is tree b:
            <Stepb1 />
        </div>
    )
}

export default TreeParent;