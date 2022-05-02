import React from 'react';

const Background = ({ children }) => {
    return (

        <body className="bg-slate-600 dark:bg-black transition-all">
            {children}
        </body>
    )
}

export default Background;