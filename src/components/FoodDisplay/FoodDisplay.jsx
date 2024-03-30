import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

export default function FoodDisplay({ category }) {

    const { food_list } = useContext(StoreContext)

    return (
        <>
            <div className="food_display" id="food_display">
                <h2 className='food_display_heading'>Top dishes near you</h2>
                <div className="food_dispaly_list">
                    {
                        food_list.map((item, index) => {
                            if (category === "All" || category === item.category) {
                                return <FoodItem
                                    key={index}
                                    id={item._id}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                    description={item.description}
                                />
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}
