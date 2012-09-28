var url1 = "http://localhost:8080/rest/stringService/reverse/";

function revert(text) {
	$.ajax({
		type : 'GET',
		url : url1+text,
		dataType : "text", // data type of response
		success : function(data) {
			$('#rsRevert').empty();
			$('#rsRevert').append("<label>The result is :  </label><font size='12' color='red'>"+data+"</font>");
		}
	});
}

$("#revertBt").click(function() {
	revert($("#textRevert").val());
})


var url2 = "http://localhost:8080/rest/stringService/mixString/";


function mixString(text1,text2) {
	$.ajax({
		type : 'GET',
		url : url2+text1+"/"+text2,
		dataType : "text", // data type of response
		success : function(data) {
			$('#rsMixString').empty();
			$('#rsMixString').append("<label>The result is :  </label><font size='12' color='red'>"+data+"</font>");
		}
	});
}

$("#mixText").click(function() {
	mixString($("#text1").val(),$("#text2").val())
})




