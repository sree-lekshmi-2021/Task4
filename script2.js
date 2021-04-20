var  request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    //1. Get all the countries from Asia continent /region using Filter function
    var casia=data.filter((x)=>x.region==='Asia');
     console.log(casia);
     // 2. Get all the countries with population of less than 2 lacs using Filter function
     var popu=data.filter((x)=>x.population<200000);
     console.log(popu);
     //3. Print the following details name, capital, flag using forEach function
     data.forEach(element =>{
         console.log(`${element.name} -${element.capital}- ${element.flag}`)
     })
     //4. Print the total population of countries using reduce function
     var total=data.reduce((sum,cv)=>sum+cv.population,0);
     console.log(`${total}`);
   // 5. Print the country which use US Dollars as currency.
   var usd=data.filter((x) =>{
       for(var curr in x.currencies){
           if(x.currencies[curr].code =='USD'){
               return true;
           }
       }
   }).map(x=>console.log(x.name));
   console.log(usd);


}