import React, { useEffect, useState } from "react";
import Menu from "./Menu";

const RestaurantCategory = (props) => {
   // console.log("rescat component call");
  const { category , categoryIndex, showIndex, setShowIndex} = props;
  const [showMenu, setShowMenu]= useState(true);
  const checkShow= () =>{
    console.log("clicked");

    if (showIndex == categoryIndex){
        setShowMenu(!showMenu);
        console.log("showMenu",showMenu);

    }
    else(

        handleClick()
    )
  }
const handleClick = () => {
    if(showMenu == false){
      setShowMenu(true);
    }
    setShowIndex(categoryIndex);

    
}

  return (
    <div className="w-7/12 mx-auto">
      <div className="my-3 border-gray-400 border-b-8">
        <div className="flex justify-between items-center cursor-pointer bg-slate-50" onClick={checkShow}>
          <h3 className="m-4 font-bold text-lg">
            {category.card?.card?.title} ({category.card?.card?.itemCards.length})
          </h3>
          <span className="mx-4">🔽</span>
        </div>
        {(showIndex == categoryIndex) && showMenu ?
      <Menu itemCards={category.card?.card?.itemCards}/> : <></>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
