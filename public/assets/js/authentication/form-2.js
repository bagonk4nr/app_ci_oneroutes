var togglePassword = document.getElementById("toggle-password");
var formContent = document.getElementsByClassName('form-content'); 
var getFormContentHeight = formContent.clientHeight;

var formImage = document.getElementsByClassName('form-image');
if (formImage.length !== 0) {
	var setFormImageHeight = formImage.style.height = getFormContentHeight + 'px';
}
if (togglePassword) {
	togglePassword.addEventListener('click', function() {
	  var x = document.getElementById("password");
	  if (x.type === "password") {
	    x.type = "text";
	  } else {
	    x.type = "password";
	  }
	});
}