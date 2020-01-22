import React from 'react';
import Stepa1 from './tree/Stepa1';
import Stepb1 from './tree/Stepb1';

const TreeParent = () => {
    return (
        <div>
            <h2>This is parent</h2>
            This is tree a:
            <Stepa1 />
            This is tree b:
            <Stepb1 />
        </div>
    )
}

export default TreeParent;