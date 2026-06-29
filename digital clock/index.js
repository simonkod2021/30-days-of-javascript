const date = document.getElementById("date")
const formatButton = document.getElementById('format')
function showCurrentDate(){
    const currentDate = new Date().toDateString();
    date.textContent = currentDate
}
showCurrentDate();

let format = 24;

function changeFormat(){
    formatButton.addEventListener("click", function(){
        if(format == 24){
            format = 12;
            formatButton.textContent = "Switch to 24-hour format";
        } else{
            format = 24;
            formatButton.textContent = "Switch to 12-hour format";
        }
    });
}


function updateClock() {
        setInterval(() => {
        const now = new Date();
        const hours = Number(now.getHours());
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        let timeString;
        if(format == 24){
           timeString = `${hours}:${minutes}:${seconds}`;
        }
        else if(format == 12){
           let hours12 = hours % 12 || 12;
           let ampm = hours < 12 ? "AM" : "PM";
           timeString = `${hours12}:${minutes}:${seconds} ${ampm}`;
        }
        document.getElementById('clock').textContent = timeString;
    }, 1000);

}
updateClock();
changeFormat();















