import React from 'react';

const Card = ({name, id, email}) => {
    return (
        <div className='tc dib dim purple ma2 pa3 bg-light-pink br3 grow'>
            <img alt='' src={`https://robohash.org/${id}?size=200x200`}/>
            <h2>{name}</h2>        
            <p>{email}</p>
        </div>
    )
};

export default Card;