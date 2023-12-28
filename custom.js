$(document).ready(function(){
	$("#name").keyup(function(){
		//getting value from input
		var name = $("#name").val();
		//setting value to variable
		if(name!=''){
			//if user enters 3 charecters then start search
			if(name.length>=3){
				var values = {
		         'name' : name 
		            };
				$.ajax({
			        url: "process.php",  //file where we insert data
			        type: "post",        //method is post
			        data: values ,
			        success: function (response) {
			           // you will get response from your process.php page                 
			          $('#output').html(response);
			        },
			        error: function(response) {
			           
			           $('#output').html(response);
			        }
			    });
			}else{
				$('#output').html('');
			}  
		}else{
			$('#output').html("<span class='alert alert-info'>Add User Name Then Search</span>");
		}
	});
	
});