$(document).ready(function() {
	$('.flexslider').flexslider({
		animation: "fade",
		animationLoop: true,
		pauseOnHover: true,
		controlNav: false,
		directionNav: false,
	});

	// parallax effect before foooter
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this);
		$(window).scroll(function(){
			var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
			var coords = "50%" + yPos + "px";
			$bgobj.css({"backgroundPosition":coords});
		});
	});

	$('.questionTitle').on("click", function(){
		$('.descriptionQuestion').each(function(){
			$(this).slideUp(450);
		});
		$(this).parent().find('.descriptionQuestion').slideDown(450);
	});

	$(".youRes").keyup(function(){
		setTimeout(function(){
			var a = 0;
			for (var i = 1; i < 10; i++) {
				if ($(".yr"+i).val().length > 0) {
					var b = parseInt($(".yr"+i).val());
					a += b;
				}else{
					var b = 0;
					a += b;
				}
			};
			$("#rrrYou").text(a);
		}, 2000);
	});
	$(".lCallBack").on("click", function(){
		$("#myModal").modal();
		return false;
	});


	/*******отправка формы со страницы контактов*********/ 

	$("#contact-form").on("submit", function(e){
		e.preventDefault();
		var flag = true;
		if ($("#jform_contact_name").val() == "") {
			$("#jform_contact_name").css("border", "1px #f00 solid");
			setTimeout(function(){
				$("#jform_contact_name").css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		if ($("#jform_contact_email").val() == "") {
			$("#jform_contact_email").css("border", "1px #f00 solid");
			setTimeout(function(){
				$("#jform_contact_email").css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		if ($("#jform_contact_emailmsg").val() == "") {
			$("#jform_contact_emailmsg").css("border", "1px #f00 solid");
			setTimeout(function(){
				$("#jform_contact_emailmsg").css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		
		if (flag) {
			$.ajax({
				url:"senderzzz.php",
				type:"post",
				data:{
					name: $("#jform_contact_name").val(),
					email: $("#jform_contact_email").val(),
					phone: $("#jform_contact_emailmsg").val(),
					message: $("#jform_contact_message").val()
				},
				error: function(data){
					console.log(data);
				},
				success: function(data){
					$(".formBottRes").html("<p>"+data+"</p>");
					$("#myModalRes").modal();
					$("#contact-form")[0].reset();;
				}
			});
		};

	});



	/*******отправка формы со всплывающей формы*********/ 

	$("#form11").on("submit", function(e){
		e.preventDefault();
		var flag = true;
		if ($('input[name="yourname2"]').val() == "") {
			$('input[name="yourname2"]').css("border", "1px #f00 solid");
			setTimeout(function(){
				$('input[name="yourname2"]').css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		if ($('input[name="yourphone2"]').val() == "") {
			$('input[name="yourphone2"]').css("border", "1px #f00 solid");
			setTimeout(function(){
				$('input[name="yourphone2"]').css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		if ($('input[name="yourmail2"]').val() == "") {
			$('input[name="yourmail2"]').css("border", "1px #f00 solid");
			setTimeout(function(){
				$('input[name="yourmail2"]').css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		
		if (flag) {
			$.ajax({
				url:"senderzzz.php",
				type:"post",
				data:{
					name: $('input[name="yourname2"]').val(),
					email: $('input[name="yourmail2"]').val(),
					phone: $('input[name="yourphone2"]').val(),
					message: $('textarea[name="textArr1"]').val()
				},
				error: function(data){
					console.log(data);
				},
				success: function(data){
					$("#myModal").modal("hide");
					$(".formBottRes").html("<p>"+data+"</p>");
					$("#myModalRes").modal();
					$("#form11")[0].reset();
				}
			});
		};

	});


	/*******отправка центральной формы с главной страницы*********/ 
	
	$("#formmiddle").on("submit", function(e){
		e.preventDefault();
		var flag = true;
		if ($('input[name="yourname"]').val() == "") {
			$('input[name="yourname"]').css("border", "1px #f00 solid");
			setTimeout(function(){
				$('input[name="yourname"]').css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		if ($('input[name="yourphone"]').val() == "") {
			$('input[name="yourphone"]').css("border", "1px #f00 solid");
			setTimeout(function(){
				$('input[name="yourphone"]').css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		
		if (flag) {
			$.ajax({
				url:"senderzzz.php",
				type:"post",
				data:{
					name: $('input[name="yourname"]').val(),
					email: $('input[name="yourphone"]').val()
				},
				error: function(data){
					console.log(data);
				},
				success: function(data){
					$(".formBottRes").html("<p>"+data+"</p>");
					$("#myModalRes").modal();
					$("#formmiddle")[0].reset();
				}
			});
		};

	});


	/*******отправка нижней формы с главной*********/ 

	$(".absolFormCont form.form-horizontal").on("submit", function(e){
		e.preventDefault();
		var flag = true;
		if ($('input[name="yourname1"]').val() == "") {
			$('input[name="yourname1"]').css("border", "1px #f00 solid");
			setTimeout(function(){
				$('input[name="yourname1"]').css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		if ($('input[name="yourphone1"]').val() == "") {
			$('input[name="yourphone1"]').css("border", "1px #f00 solid");
			setTimeout(function(){
				$('input[name="yourphone1"]').css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		if ($('input[name="yourmail1"]').val() == "") {
			$('input[name="yourmail1"]').css("border", "1px #f00 solid");
			setTimeout(function(){
				$('input[name="yourmail1"]').css("border", "1px #a0a0a0 solid");
			}, 2000);
			flag = false;
		}
		
		if (flag) {
			$.ajax({
				url:"senderzzz.php",
				type:"post",
				data:{
					name: $('input[name="yourname1"]').val(),
					email: $('input[name="yourmail1"]').val(),
					phone: $('input[name="yourphone1"]').val(),
					message: $('textarea[name="textArr"]').val()
				},
				error: function(data){
					console.log(data);
				},
				success: function(data){
					$("#myModal").modal("hide");
					$(".formBottRes").html("<p>"+data+"</p>");
					$("#myModalRes").modal();
					$("#form11")[0].reset();
				}
			});
		};

	});



});


$(document).ready(function() {
    $('.lCallBack.allTimeClick').animate({"boxShadow":"1px 1px 10px #333"}, 1500);
    $('.lCallBack.allTimeClick').animate({"boxShadow":"1px 1px 1px #333"}, 1500);
    setTimeout(arguments.callee, 4000);
});