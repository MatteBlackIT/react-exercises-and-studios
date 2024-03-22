import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.brianlagerstrom.com/recipes/the-absolute-best-chocolate-chip-cookies";
   let authorPhoto = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHJPENWjP9SiBu0abLkpSd9_RYXzKe4F6SLapuMVVotRPc_XZ4";
   let authorName = "Brian Lagerstrom";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["butter", "sugar", "vanilla Extract", "eggs", "chocolate"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Cookie</h1>
            <p>COOOOKIE</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://sallysbakingaddiction.com/wp-content/uploads/2013/02/peanut-butter-chocolate-swirl-cookies-2.jpg" alt="" className="Cookie"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
