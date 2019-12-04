$("#useBilling").click(function(){
	if($("#useBilling").prop('checked')){
		console.log($("#billing").val())
		$("#home").val($("#billing").val())
		$("#home").prop('disabled', true)
	}
	else{
		$("#home").val("")
		("#home").prop('disabled', false)
	}
});