
$(document).ready(function () {
    $("#basic-form").validate();
});
(".submit").click(function () {
    let iuname = document.getElementById("uname").value; (".submit").html("<p class=’alert alert-info’>Thank you " + iuname + ", your feedback has been submited.</p>");
    $(".form").css({ "display": "flex", "justify-content": "center", "align-items": "center", "width": "97vw", "height": "90vh", "font-size": "20px" });
})