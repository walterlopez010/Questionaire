
$(document).ready(function () {
  $("#resultstest").clone("<tbody></tbody>");
  $.ajax({
    type: "GET",
    url: "js/contacts.json",
    dataType: "json",
    cashe: false,
    success: function (data) {
      $(data.contacts).each(function (index, value) {
        $("<th></th>").html(value.name).appendTo("#resultstest tbody");
        $("<tr></tr>").html("<input type='checkbox' value='" + value.email + "'> " + "  Email: " + "<a href ='mailto:" + value.email + "' name='emailto' id=" + index + ">" + value.email + "</a>").appendTo("#resultstest tbody");
        $("<tr></tr>").html("  Phone : " + value.phonenumber).appendTo("#resultstest tbody");
      });
    },

    error: function () {
      alert("An error occurred while processing json file.");
    }
  });
});

$("#email").submit(function (event) {
  event.preventDefault();
  var searchIDs = $("input[type='checkbox']:checked").map(function () {
    return $(this).val();
  }).get(); // <----
  console.log(searchIDs);
  document.getElementById("emaillist").value = searchIDs;
  //$("#emaillist").value= searchIDs;
});