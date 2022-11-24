var txtArea = document.querySelector('#txt-area')
var translateBtn = document.querySelector('#translate-btn')
var outputArea = document.querySelector('.output-area')

translateBtn.addEventListener("click",clickhandler)

var url = "https://api.funtranslations.com/translate/chef.json"

function textTranslationurl(input){
    return url + "?" + "text="+ input
}

function errorHandler(error){
    console.log("There is a error",error)
    alert("Something went wrong!!! please try after some times")
}

function clickhandler(){
    var inputArea = txtArea.value;
    
    fetch(textTranslationurl(inputArea))
        .then(response => response.json())
        .then( json =>{
                    var translatedText = json.contents.translated 
                    outputArea.innerText = translatedText   
        })       
    
    .catch(errorHandler)
}