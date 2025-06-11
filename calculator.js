let string ="";
let input = document.querySelector("input");
let button = document.querySelectorAll("button");
for(btn of button){
    btn.addEventListener("click",function (){
        if(this.innerHTML == "AC"){
             string ="";
            input.value =string;
        }
        else if(this.innerHTML == "DEL"){
            string =string.substring(0,string.length-1);
            input.value = string;
        }
        else if(this.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else{
            string =string + this.innerHTML;
            input.value = string;
        }
    });
}
