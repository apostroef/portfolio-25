import React from 'react';

interface Margin {
    body: React.ReactNode;
}

export const Margin: React.FC<Margin> = ({ body }) => {
    return (
        <>
            <div className="lg:x-32 flex flex-col items-start justify-center px-8 py-8 md:px-32 xl:px-64">{body}</div>
        </>
    );
};
