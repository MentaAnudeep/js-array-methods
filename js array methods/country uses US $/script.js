var request = new XMLHttpRequest(); //created request
//open connection
request.open('GET' ,'https://restcountries.eu/rest/v2/all' , true);
//sending request
request.send();
//load request
request.onload = function(){
    var data = JSON.parse(this.response);

    var con = data.filter((element) =>{
        //console.log(element.currencies);
       return element.currencies[0].code === 'USD'; 
    });
    console.log(con);
    for(var i = 0 ; i < con.length ; i++)
    {
        console.log(i + 1 , 'Country : '+con[i].name);
        console.log('    Currency : '+con[i].currencies[0].name);
    }

}
