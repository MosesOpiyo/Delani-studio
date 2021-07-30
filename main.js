$(document).ready(function() {
    $(".col-1 img").click(function() {
        $(".par1 p").toggle();
    })
    $(".col-2 img").click(function() {
        $(".par2 p").toggle();
    })
    $(".col-3 img").click(function() {
        $(".par3 p").toggle();
    })
})

function userMessage() {
    let name = document.getElementById('name').value
    let message = document.getElementById('message').value

    return alert("Hello " + name + ". " + message + " .Message has been received.")
}