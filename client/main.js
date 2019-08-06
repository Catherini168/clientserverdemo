$(document).ready(startApp);

function startApp(){
    getData()
    getFood()

}
function getData(){
    var settings = {
        url : 'http://localhost:3001/getnames',
        method: 'get',
        dataType : 'json',
        success : handleDataFromServer 
    }
    $.ajax(settings);
}

function handleDataFromServer(response) {
        console.log(response);
        for(var index=0; index< response.length; index++){
            var nameDiv = $("<div>").text(response[index].name);
            $('body').append(nameDiv);
        }

}

function getFood(){
var settings = {
    url : 'http://localhost:3001/favefood',
        method: 'get',
        dataType : 'json',
        success : handleFoodDataFromServer 
    }
    $.ajax(settings);
}

function handleFoodDataFromServer(response){
    console.log(response);

}
