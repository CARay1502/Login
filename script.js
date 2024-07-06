function goToPage() {
    event.preventDefault(); //prevent form submittion
    window.location.href = "account.html";
}

//notification JS shit
function showNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "block";


}

function closeNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
}

//show notification automatically 
window.onload = function() {
    setTimeout(showNotification, 3000); 
}