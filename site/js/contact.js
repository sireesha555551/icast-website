$("#contact").click(function(event){
  event.preventDefault();
  var name = $('#name').val();
  // var cmpname = $('#cmpname').val();
  var email = $('#email').val();
  var mobile = $('#mobile').val();
  // var option = $('#type').find(":selected").text();
  var comment = $('#message').val();


  if(name == "" || email == "" || mobile == "" ||comment == ""){


    alert("Please fill up all the fields. Mobile Number is optional.", '','error');

  }
  else{
    $.getJSON("https://api.mailgob.com/mailgob/message?name="+name+"&email="+email+"&mobile="+mobile+"&message="+comment, 
    	function(result){
       var ret = result['status'];
       if(ret == false){
        swal(result['message'],'','error');
       }else{
        alert('Message Send Successfully','','success');
       }
    });    
  }

});