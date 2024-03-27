import React from 'react'
import Header from '../components/Header/Header'
import ExploreMenu from '../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay'

export default function Home() {

  const [category, setCategory] = React.useState('All')

  return (
    <>
      <Header />
      <ExploreMenu
        category={category}
        setCategory={setCategory}
      />
      <FoodDisplay />
    </>
  )
}
