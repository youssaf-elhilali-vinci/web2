const dateTimeNow = new Date();
const msg ="This is the best moment to have a look at this website !";

function addDateTime(message){
    console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
    console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15
    return dateTimeNow.toLocaleDateString() + dateTimeNow.toLocaleTimeString() + message;
}
alert(addDateTime(msg));



