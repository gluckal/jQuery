$(document).ready(function(){
    $("form").submit(function(event){
        var valid_input = false;
        var fruit = $('input[name="fruit"]');
        var year = $('input[name="standing"]');

        if(fruit.is(":checked")){
            console.log("fruit");
            valid_input = true;
        }
        else{
            alert("You must pick a fruit!");
            event.preventDefault();
        }
        return valid_input;
    })
})