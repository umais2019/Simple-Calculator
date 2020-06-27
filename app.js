function getNumber(num){
    
    var lecture=document.getElementById("lecture");


    lecture.value += num;
}

function clearResult(){
    var lecture =  document.getElementById("lecture");
    lecture.value ="0"
}

function getResult(){
    var lecture= document.getElementById("lecture");
    lecture.value= eval(lecture.value)
}