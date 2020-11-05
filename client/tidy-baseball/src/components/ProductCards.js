import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function ProductCards() {
    return (
        <div className="cards">
            <h1>Here are some products we sell so you can maintain your baseball field yourself!</h1>
            <h3>(None of these are actually for sell. This is a suedo site.)</h3>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-7.jpg'
                        text="Paint Spray Tractor - $2800"
                        label='Paint Equipment'
                        />
                        <CardItem 
                        src='images/img-8.jpg'
                        text="Hand Push Line Painter - $220"
                        label='Paint Equipment'
                        />
                        <CardItem 
                        src='images/img-10.jpg'
                        text="Dirt Raking Tractor - $2200"
                        label='Diamond Equipment'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-11.jpg'
                        text="Dirt Raking Attachment for Mower - $190"
                        label='Diamond Equipment'
                        />
                        <CardItem 
                        src='images/img-12.jpg'
                        text="Hand Line Dirt Rake - $95"
                        label='Diamond Equipment'
                        />
                        <CardItem 
                        src='images/img-13.jpg'
                        text="Hand Dirt Rake - $55"
                        label='Diamond Equipment'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-14.jpg'
                        text="Cross Line Dirt Rake - $175"
                        label='Diamond Equipment'
                        />
                        <CardItem 
                        src='images/img-15.jpg'
                        text="Grass Cutting Attachment for Mobile Cart - $700"
                        label='Field Equipment'
                        />
                        <CardItem 
                        src='images/img-16.jpg'
                        text="Roll Up Diamond Waterproof Tarp - $750"
                        label='Diamond Equipment'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default ProductCards
