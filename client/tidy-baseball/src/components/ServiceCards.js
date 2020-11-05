import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function ServiceCards() {
    return (
        <div className="cards">
            <h1>Here are our two Service Qualities</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-6.jpg'
                        text="Great Quality for Great Price starting at 1000$"
                        label='Highschool Field Services'
                        />
                        <CardItem 
                        src='images/img-1.jpg'
                        text="Professional Quality starting at 2500$"
                        label='Professional Field Services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default ServiceCards
