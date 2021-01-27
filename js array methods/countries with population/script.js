var request = new XMLHttpRequest(); //created request
//open connection
request.open('GET' ,'https://restcountries.eu/rest/v2/all' , true);
//sending request
request.send();
//load request
request.onload = function(){
    var data = JSON.parse(this.response);
    var pop = data.filter((P) =>{
        return P.population < 200000;
    })
    console.log(pop);
    for(var i = 0 ; i < pop.length ; i++)
    {
        console.log(i + 1 , pop[i].name);
    }
}
