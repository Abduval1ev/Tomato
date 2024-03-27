import React from 'react'
import { assets } from '../../assets/assets'

export default function FoodItem({ id, name, image, price, description }) {

    const [itemCount, setItemCount] = React.useState(0)

    return (
        <div className='food_item'>
            <div className="food_item_img_container">
                <img
                    src={image} alt="Image"
                    className='food_item_image'
                />
                {!itemCount
                    ?
                    <img
                        className='add'
                        onClick={() => setItemCount(prev => prev + 1)}
                        src={assets.add_icon_white}
                        alt='Icon'
                    /> :
                    <div className='food_item_counter'>
                        <img
                            onClick={() => setItemCount(prev => prev + 1)}
                            src={assets.remove_icon_red}
                            alt="Icon"
                        />
                        <span>{itemCount}</span>
                        <img
                            onClick={() => setItemCount(prev => prev + 1)}
                            src={assets.add_icon_green}
                            alt="" />
                    </div>
                }
            </div>
            <div className="food_item_info">
                <div className="food_item_name_rating">
                    <p className='food_item_name'>{name}</p>
                    <img
                        className='food_item_rating'
                        src={assets.rating_starts}
                        alt="Stars"
                    />
                </div>
                <p className="food_item_desc">{description}</p>
                <span className='food_item_price'>${price}</span>
            </div>
        </div>
    )
}
