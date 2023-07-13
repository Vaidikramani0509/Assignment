
$(".sigin-btn").click(function () {
    let xname = document.forms["myForm"]["name"].value;
    let xmail = document.forms["myForm"]["email"].value;
    let xnum = document.forms["myForm"]["number"].value;
    let xmess = document.forms["myForm"]["message"].value;

    if (xname == "" && xmail == "" && xnum == "" && xmess == "") {
        alert("All input Filleds are empty")
    }
    else{
        if (xname == "") {
            alert("name Filled are empty")
        }
        else if (xmail == "") {
            alert("email Filled are empty")
        }
        else if (xnum == "") {
            alert("contact Filled are empty")
        }
        else if (xmess == "") {
            alert("message Filled are empty")
        }
        else {
            $(this).attr("data-toggle", "modal");
        }
    }
   
});

$(".sigin-btn").click(function () {
    let inputname = document.getElementById("uname").value;
    let inputmail = document.getElementById("umail").value;
    let inputnum = document.getElementById("unum").value;
    let inputmess = document.getElementById("umess").value;
    document.getElementById("namegreet").innerHTML = "Hello, " + inputname;
    document.getElementById("emailpop").innerHTML = inputmail;
    document.getElementById("conpop").innerHTML = "+91 " + inputnum;
    document.getElementById("messpop").innerHTML = inputmess;
    document.getElementById("pop").innerHTML = "hello " + inputname + " your number is " + inputnum + " and email is " + inputmail + " you say that " + inputmess;
});


$(".confirmcls").click(function () {
    let iuname = document.getElementById("uname").value;
    $(".conform").html("<p class='alert alert-info'>Thank you " + iuname + ", your feedback has been submited.</p>");
    $(".contact").css({ "display": "flex", "justify-content": "center", "align-items": "center", "width": "97vw", "height": "90vh", "font-size": "20px" });
})
