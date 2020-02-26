function yy() {
	let x1;
	let x2;
	let answer = $('.answer__input');
 let a = parseInt($('#a').val());
 let b = parseInt($('#b').val());
 let c = parseInt($('#c').val());
 let c1 = $('#c');
 	function s2() {answer.empty().append('Ваши корни это ' + x1 + ' и ' + x2);} 
 	function s1() {answer.empty().append('Ваш корень это ' + x1);} 
 	function s0() {answer.empty().append('корней нет');} 
 if (isNaN(a)) a = 0; 
 if (isNaN(b)) b = 0; 
 if (isNaN(c)) c = 0; 
 //if (c[0] == 0 && (c[1] == "." || c[1] == ',')) {
 //	с = с[0] + 
 //}
 let a2 = a+a;
	if (a != 0 && b != 0 && c != 0) {
		let d = b*b - 4*a*c;
	if (d < 0) s0();	
	if (d > 0) {
		x2 = (-b + Math.sqrt(d))/a2;
		x1 = (-b - Math.sqrt(d))/a2;
		s2();
	}
	if (d == 0) {
		x1 = -b/a2;
		s1();
}
}
 else if (a == 0 && b != 0) {
		x1 = -c/b;
		s1();
	}
 else if (b == 0 && a != 0 && c != 0) {
	if (c > 0) 	s0();	
	if (c < 0) {
		x2 = Math.sqrt(-c);
		x1 = -Math.sqrt(-c);
		s2();
		}
	}
 else	if (c==0 && a!=0) { 	
		x2 = 0;
		x1 = -b/a;
		s2();
	}
	else if (c!=0&&a==0&&b==0) 	answer.empty().append(c + ' = 0'); 
	else if (b!=0&&a==0&&c==0) 	answer.empty().append('Ваш корень это 0'); 
	else if (a!=0&&b==0&&c==0) 	answer.empty().append('Ваш корень это 0'); 
	else if (a==0&&b==0&&c==0)  answer.empty().append('0 = 0'); 
}

