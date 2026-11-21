function updatecurrentTime(){
    const now= new Date();
    const timeString= now.toLocaleTimeString();
    document.getElementById('current-time').textContent=timeString;
}
// Update the time every second
setInterval(updatecurrentTime, 1000);

//Initial call to display the time immmediately
updatecurrentTime();
    
