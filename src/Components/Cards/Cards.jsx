import React from 'react';

function Cards( {cardClass, title, imageUrl} ) {
    return (
        <div className="card">
            <div className={`card-image ${cardClass}`} style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <h2>{title}</h2>
        </div>
    );
}

export default Cards;
