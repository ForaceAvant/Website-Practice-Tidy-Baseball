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
                        text="Here are some of our lower-budget highschool fields!"
                        label='Highschool Field Services'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-2.jpg'
                        text="Here are some of our college/professional fields!"
                        label='Professional Field Services'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-3.jpg'
                        text="Here is some default text that I need to change in cards"
                        label='Baseball'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-4.jpg'
                        text="Here is some default text that I need to change in cards"
                        label='Baseball numba 2'
                        path='/services'
                        />
                        <CardItem 
                        src='images/img-5.jpg'
                        text="Here is some default text that I need to change in cards"
                        label='Baseball numba 2'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Cards
