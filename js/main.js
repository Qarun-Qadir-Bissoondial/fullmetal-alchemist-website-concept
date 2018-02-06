$(function () {
	var login_shown = true;
	var swap = $(".change");
	var login = $("#first");
	var register = $("#second");
	var passmatch = false;

	$("html").css("overflow-y", "hidden");
	register.fadeOut(0);

	swap.click(function () {
		// BEHOLD THE RATCHET CODE

		if (login_shown) {
			login.fadeOut(200, function () { register.fadeIn(200); });
			login_shown = false;
			$("#footer").fadeOut(200);
			$("html").css("overflow-y", "visible");
		} else {
			register.fadeOut(100, function () { login.fadeIn(100); });
			login_shown = true;
			$("#footer").fadeIn(200);
			$("html").css("overflow-y", "hidden").animate({scrollTop: 0}, "fast");
			$("html").css("background-image", "url('../fmabRegister.png')");
		}
	})

	var pword = document.getElementById('pword');
	var valid_pword = document.getElementById('valid-pword');
	var results = document.getElementById('results');

	valid_pword.addEventListener("keyup", function () {
		if (valid_pword.value == "") { 
			results.innerHTML = "";
		}
		else if (pword.value === valid_pword.value) { results.innerHTML = "Passwords match! &#10003;"; passmatch = true; }
		else { results.innerHTML = "Passwords do not match! &times;" }
	});


	register.find("form").on("submit", function () {
		if (passmatch) { 
			alert("Success"); 
			window.location.href = "home.html";
		}
		else { alert("Failure"); }
	})


})
