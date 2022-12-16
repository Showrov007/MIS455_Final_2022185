function connect() {

    var searchText = document.getElementById('search').value ; 
   // console.log(searchText);
   
   var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   //console.log(url);
   
    fetch(url)
    .then(res => res.json() )
    .then(data => showData(data));
   
    document.getElementById('search').value = ""; 
   
   }
   
   function showData(data){
          var number=document.getElementById('number').value;
          document.getElementById('number').value = ""; 
          console.log("data from showData Function", data);
   
          var oldContent = document.getElementById('container');
          oldContent.textContent= "";
   
          for (var i=0; i<number; i++){
           console.log(data.meals[i]);
   
           var newDiv = document.createElement('div');
           newDiv.innerHTML = `<div class="card" style="width: 18rem;">
                               <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="...">
                               <div class="card-body">
                               <h5 class="card-title">${data.meals[i].strMeal}</h5>
                               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                               <a href="${data.meals[i].idMeal}" class="btn">Check Meal</a>
                               </div>
                               </div>`;
                               newDiv.classList.add("meal-style");
   
                               oldContent.appendChild(newDiv);
        
   
          }
   
   }