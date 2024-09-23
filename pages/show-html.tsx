import React from 'react';

const ShowHtmlPage: React.FC = () => {
    return (
        <div>
            <h1>Embedded HTML</h1>
            <iframe
                src="/Project.html"
                style={{width: '100%', height: '100vh', border: 'none'}}
                title="Embedded HTML"
            />
        </div>
    );
};

export default ShowHtmlPage;
