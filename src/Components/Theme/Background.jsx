import React from 'react';

const Background = ({ children }) => {
    return (

        <div className="bg-gray-100 text-gray-700 dark:bg-zinc-800 transition-all">
            {children}
        </div>
    )
}

export default Background;