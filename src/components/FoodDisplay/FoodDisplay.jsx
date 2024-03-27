import React from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

export default function FoodDisplay() {

    const { food_list } = React.useContext(StoreContext)

    return (
        <>
            <div className="food_display" id="food_display">
                <h2 className='food_display_heading'>Top dishes near you</h2>
                <div className="food_dispaly_list">
                    {food_list.map((item, index) => {
                        return <FoodItem
                            key={index}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            description={item.description}
                        />
                    })}
                </div>
            </div>
        </>
    )
}
