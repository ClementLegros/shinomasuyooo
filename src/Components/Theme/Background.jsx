import React from 'react';

const Background = ({ children }) => {
    return (

        <div className="bg-slate-400 dark:bg-zinc-800 transition-all">
            {children}
        </div>
    )
}

export default Background;