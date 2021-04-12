import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    console.log('CardList')
    let cardArray = []
    for (let i=0; i < robots.length; i++) {
        cardArray.push(<Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />)
    }
    return (
        <div className=''>
            {cardArray}
        </div>
    )
};

export default CardList;