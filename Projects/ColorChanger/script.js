const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
// const backgroundColor = body.style.backgroundColor (this is wrong)

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        // const id = event.target.id
        // switch (id) {
        //     case "grey":
        //        body.style.backgroundColor = id
        //         break;
        //     case "white":
        //        body.style.backgroundColor = id
        //         break;
        //     case "lightblue":
        //        body.style.backgroundColor = id
        //         break;
        //     case "yellow":
        //        body.style.backgroundColor = id
        //         break;
        //     default:
        //        body.style.backgroundColor = "white"
        //         break;

        body.style.backgroundColor = button.id})
    
})