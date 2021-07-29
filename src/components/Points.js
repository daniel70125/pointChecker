import React from 'react';
import './Points.scss';

const Points = (props) => {
    // console.log(props.elm)
    let user = props.elm.transactions.map((elm, index) => {
        return (
        <li>${elm} </li>
        )
    })
    let totalSpent = props.elm.transactions.reduce((acc, currentValue) => {
        return acc + currentValue;
    })
    let userPoints = Math.floor(totalSpent) - 100;
    let over50Points = Math.floor(totalSpent) >= 100 ? 100 - 50 : Math.floor(totalSpent) < 100 && Math.floor(totalSpent) > 50 ? Math.floor(totalSpent) - 50 : 0; 
    let over100Points = Math.floor(totalSpent) >= 100 ? userPoints * 2 : 0; 
    const finalPoints = over50Points + over100Points; 
    console.log(finalPoints)
    return ( 
        <div id='points-wrapper'>
            <p id='points-main-p'>{props.elm.name} has {finalPoints} points available !</p>
            <p>Transactions: </p>
                <ul>
                {user}
                </ul>
                <hr></hr>
                <span className='points-span-total'>Total: ${Math.floor(totalSpent)}</span>
            <p className='points-rules'>2 Points for each dollar spent over $100</p>
                <span>${Math.floor(totalSpent)} - $100 = {Math.floor(totalSpent) >= 100 ? Math.floor(totalSpent) - 100 : 0}</span> <br />
                <span>{Math.floor(totalSpent) >= 100 ?  Math.floor(totalSpent) - 100 : 0} x 2 points = {Math.floor(totalSpent) >= 100 ? (Math.floor(totalSpent) - 100) * 2 : 0} points</span>
            <p className='points-rules'>1 Point for each dollar spent over $50</p>
                <span>${Math.floor(totalSpent) >= 100 ? 100 : Math.floor(totalSpent)} - $50 = {Math.floor(totalSpent) >= 100 ? 100 - 50  : Math.floor(totalSpent) < 100 && Math.floor(totalSpent) >= 50 ? Math.floor(totalSpent) - 50 : 0 }</span> <br />
                <span>{Math.floor(totalSpent) >= 100 ? 100 - 50 : Math.floor(totalSpent) < 100 && Math.floor(totalSpent) > 50 ? Math.floor(totalSpent) - 50  : 0} x 1 points = {Math.floor(totalSpent) >= 100 ? 100 - 50 : Math.floor(totalSpent) < 100 && Math.floor(totalSpent) > 50 ? Math.floor(totalSpent) - 50 : 0  } points</span>
                <br />
                <br />
                <p className='points-rules'>Total: </p>
                <span>{over100Points} + {over50Points} = {finalPoints} total points</span>
        </div>
     );
}
 
export default Points;