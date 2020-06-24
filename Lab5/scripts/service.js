function validatePhone(txtPhone){
	var a = document.getElementById(txtPhone).value;
	var filter = /\d{3}\-\d{3}\-\d{3}/
	if(filter.test(a)){
		return true;
	}
	else{
		return false;
	}
}

function disableDates(date){
	var c = document.getElementById("colour").checked;
	var h = document.getElementById("haircut").checked;
	var o = document.getElementById("outline").checked; 
	var arr = new Array();
	if(c){
		arr.push(1);
	}
	if(h){
		arr.push(3);
	}
	if(o)
	{
		arr.push(4);
	}
	if (date.getDay() == 0 || date.getDay() == 6|| arr.includes(date.getDay()) )
        return [false];

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";
function validateCredit(creditCard)
{
	var a = document.getElementById(creditCard).value;
	var filter = /\d{4}\-\d{4}\-\d{4}\-\d{4}/
	if(filter.test(a)){
		return true;
	}
	else{
		return false;
	}
}

$(document).ready(function(){
	$("#phone").on("change", function(){
    	if (!validatePhone("phone")){
        	alert("Wrong format for phone XXX-XXX-XXXX");
        	$("#phone").val("(xxxx)");
        	$("#phone").addClass("error");
        }
    	else {
        	$("#phone").removeClass("error");
    	}
    });

	$("#credit").on("change", function(){
		console.log("credit")
    	if (!validatePhone("credit")){
        	alert("Wrong format for credit card  XXXX-XXXX-XXXX-XXXX");
        	$("#credit").val("(xxxx)");
        	$("#credit").addClass("error");
        }
    	else {
        	$("#credit").removeClass("error");
    	}
    });


    $("#dateInput").datepicker(
        {
            
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),  
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }   
    );


});
