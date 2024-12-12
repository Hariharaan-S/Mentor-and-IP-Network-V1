import React from 'react';

const EmbeddedPage = () => {
    return (
        <div style={{ width: '100%', height: '100vh', border: 'none' }}>
            <iframe
                src="http://localhost:5173"
                title="Embedded Page"
                style={{
                    width: '100vh',
                    height: '80vh',
                    border: 'none',
                    position: 'absolute',
                    marginLeft: '4rem',
                    marginTop: '4rem'
                }}
            />
        </div>
    );
};

export default EmbeddedPage;
