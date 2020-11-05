import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these clean fields!</h1>
            <div className="cards__conatiner">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-9.jpg'
                        text="Here is some default text that I need to change in cards"
                        label='Baseball'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Cards
