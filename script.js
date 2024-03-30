function showAlertAndUpdateDOM() {
    // Show an alert
    window.alert("Hello! This is an alert.");

    // Update the DOM
    var element = document.getElementById("demo");
    if (element) {
        element.innerHTML = "DOM updated successfully!";
    } else {
        console.error("Element with id 'demo' not found.");
    }
}
