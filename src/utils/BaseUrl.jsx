import { useState } from "react";

export const BaseUrl = "https://api.bestselect.net/";

 // CALC DAYS FOR ADD NEWS OR ARTICLES
 export const calcDays = (date) => {
    const day = Math.floor( (new Date() - new Date(date)) / (1000 * 60 * 60 * 24))
    return `${day} day${day > 1 ? "s" : null} ago`
   }

export const handleResize  = (setScreenWidth) => {  
 addEventListener("resize", () => {
   setScreenWidth(window.innerWidth);
});
}


export const handleScroll  = (setScreenHeight) => {  
   addEventListener("scroll", () => {
      setScreenHeight(window.scrollY);
  });
}
  