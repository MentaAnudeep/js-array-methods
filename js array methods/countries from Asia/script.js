var request = new XMLHttpRequest(); //created request
//open connection
request.open('GET' ,'https://restcountries.eu/rest/v2/all' , true);
//sending request
request.send();
//load request
request.onload = function(){
    var data = JSON.parse(this.response);

   var regions = data.filter((reg) =>{
       if(reg.region === 'Asia')
       {
           return reg.name;
       }
   });
   console.log(regions);
   for(var i = 0 ; i < regions.length ; i++)
    {
        console.log(i + 1 , 'Country : '+regions[i].name , 'Region : '+regions[i].region);
    }    

}
