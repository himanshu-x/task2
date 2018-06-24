function validate() {
    var name = $("#inputName").val();
    var email = $("#inputemail").val();
    var Gender = $("#selectGender").val();
    var status = $("[name='maritalStatus']:checked").val();

    if (name && email && Gender && status) {
        $("#labelname").text(name);
        $("#labelemail").text(email);
        $("#labelgender").text(Gender);
        $("#labelstatus").text(status);
    }
    else {
        alert("Please enter all the fields.")
    }
};

// $(document).ready(function () {

//     $("button").click(function () {
//         $("input:text").val("");
//     });
//     console.log("ready!");
// });

