export default function BookList() {
   let pageTitle = "Bookz";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM38PHEP8btZ_6EsgWs_CclM6UVuo1X8_aLw&usqp=CAU";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM38PHEP8btZ_6EsgWs_CclM6UVuo1X8_aLw&usqp=CAU";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM38PHEP8btZ_6EsgWs_CclM6UVuo1X8_aLw&usqp=CAU";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Children of Blood & Bone" />
         <img src={book2} alt="Children of Blood & Bone" />
         <img src={book3} alt="Children of Blood & Bone!" />
      </div>      
   );
}