import React from 'react'
import { menu_list } from '../../assets/assets'
import ExploreCard from '../EploreCard/ExploreCard';

export default function ExploreMenu() {
    console.log(menu_list);
    return (
        <>
            <div className="explore_menu" id="explore_menu">
                <h1 className='explore_menu_heading'>Explore our menu</h1>
                <p className='explore_menu_text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, deleniti.</p>
                <div className="explore_menu_list">
                    {
                        menu_list.map((item, index) => {
                            return (
                                <div key={index} className="menu_list_item">
                                    <img
                                        className='menu_list_item_image'
                                        src={item.menu_image}
                                        alt="Image"
                                    />
                                    <h3 className='menu_list_item_name'>{item.menu_name}</h3>
                                </div>
                            )
                        })
                    }
                </div>
                <hr />
            </div>
        </>
    )
}