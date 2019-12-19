var tabAsk = ["", "", "", "", "", "", "", "", "", ""];
var tabResp = ["", "", "", "", "", "", "", "", "", ""];
var compteur = 0;
var i = 0;

$("#ask").text(tabAsk[i]);
$(".response").click(function() {

    $("#res").append("<div> Question " + i+1 +" : " + tabAsk[i] + "</div>");
    ++i;
    $("#ask").text(tabAsk[i]);
});

