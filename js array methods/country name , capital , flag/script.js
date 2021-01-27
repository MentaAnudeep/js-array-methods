var request = new XMLHttpRequest(); //created request
//open connection
request.open('GET' ,'https://restcountries.eu/rest/v2/all' , true);
//sending request
request.send();
//load request
request.onload = function(){
    var data = JSON.parse(this.response);
    var i = 1;

    data.forEach((element) => {
        console.log(i , 'Country : '+element.name ,'Capital : '+element.capital);
        console.log('    '+'Flag : '+element.flag);
        console.log('------------------------------------------------------------');
        i++;
    });
}
