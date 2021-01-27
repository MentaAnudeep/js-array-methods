var request = new XMLHttpRequest(); //created request
//open connection
request.open('GET' ,'https://restcountries.eu/rest/v2/all' , true);
//sending request
request.send();
//load request
request.onload = function(){
    var data = JSON.parse(this.response);
    
    const total_pop = data.reduce(function(acc , item){
        return acc + item.population;
    },0);

    console.log(total_pop);

}
