import React from 'react';
import Card from './Card';

function CardList(props) {
    const {robots} =props
    const cardcomponent = robots.map((user) => {
        return(
        <Card 
           key={user.id} 
           id ={user.id} 
           name= {user.name} 
           username ={user.username} 
           email={user.email} 
        />
        );
    })
    return(
 <div>
 
    {cardcomponent}
      
</div>
    );
}

export default CardList;