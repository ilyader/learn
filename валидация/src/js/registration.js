function hide(elem) {
	elem.style.display = 'none';
}
function show(elem) {
	elem.style.display = 'block';
}
function validation() {
	console.log('валидация');
 const name = document.querySelector('#name').value,
 forum = document.querySelector('#forumName').value,
 pass = document.querySelector('#password').value,
 errName = document.querySelector('#namee'),
 errForum = document.querySelector('#forumNamee'),
 errPass = document.querySelector('#passworde');
 let error = false;
 if (name == '' || name == ' ') { show(errName); error = true;}
 else { hide(errName); error = false;}
 if (forum == '' || forum == ' ') { show(errForum); error = true;}
 else { hide(errForum); error = false;}
 if (pass == '' || pass == ' ' || pass.length < 6) { show(errPass); error = true;}
 else { hide(errPass); error = false;}
 return error
}

 const reg = document.querySelector('.btn');
 reg.addEventListener('click', function(e) {
 	e.preventDefault();
 	validation();
 	if (!validation()) {
 		document.location.replace("../dist/main.html");
 	}
 });
