import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
    return (
        <div className="cards">
            <h1>Check out these clean fields!</h1>
            <div className="cards__container">
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
                        text="We also provide equiptment for you to do it yourself!"
                        label='Field Equipment'
                        path='/products'
                        />
                        <CardItem 
                        src='images/img-5.jpg'
                        text="Check out some of our motorized equiptment"
                        label='Field Equipment'
                        path='/products'
                        />
                        <CardItem 
                        src='images/img-4.jpg'
                        text="We even have additions to attach to equiptment you may already have!"
                        label='Field Equipment'
                        path='/products'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Cards
