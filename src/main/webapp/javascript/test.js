define('SHARED/module', ["SHARED/jquery"], function($) { 
	
var _module = {};

(function() {// Begin
																						// eXo.module.js

var url="http://localhost:8080/rest/stringService/reverse/";

function revert(text) {
	  $.ajax({
	        type: 'GET'+text,
	        url: url,
	        dataType: "text", // data type of response
	        success: function(data){
	        	alert(data);
	        }
	    });
}
	

$("#revertBt").click(function(){
alert($("#textRevert").value());
}// End eXo.module.js


})
();return _module;});