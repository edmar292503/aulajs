modo.onchange = () => {
    if(modo.value == 1){
        document.querySelector('body').style.backgroundColor = "black";
    }else if(modo.value == 2){
        document.querySelector('body').style.backgroundColor = "red";
    }else if(modo.value == 3){
        document.querySelector('body').style.backgroundColor = "green";
    }else if(modo.value == 4){
        document.querySelector('body').style.backgroundColor = "blue";
    }else if(modo.value == 5){
        document.querySelector('body').style.backgroundColor = "blueviolet";
    } else {
        document.querySelector('body').style.backgroundColor = "yellow";
    }
}
