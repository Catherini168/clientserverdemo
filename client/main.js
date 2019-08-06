$(document).ready(startApp);

function startApp(){
    getData()
    getFood()

}
function getData(){
    var settings = {
        url : '../server/getnames.json',
        method: 'get',
        dataType : 'json',
        success : handleDataFromServer 
    }
    $.ajax(settings);
}

function handleDataFromServer(response) {
        console.log(response);

}

function getFood(){
var settings = {
    url : '../server/favefood.json',
        method: 'get',
        dataType : 'json',
        success : handleFoodDataFromServer 
    }
    $.ajax(settings);
}

function handleFoodDataFromServer(response){
    console.log(response);

}
