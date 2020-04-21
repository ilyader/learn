const 
btn = document.querySelector('.btn'),
text = document.querySelector('.inp'),
ans = document.querySelector('.answer');
function hm(t) {
const	matrix = [
 [1,0,1,0,1,0,1,0,1,0,1,0],
 [0,1,1,0,0,1,1,0,0,1,1,0],
 [0,0,0,1,1,1,1,0,0,0,0,1],
 [0,0,0,0,0,0,0,1,1,1,1,1]
];
let start = [],//начальный вектор
 y = 0,//Два счётчика
 u = 0,//
 synd = [],
 num;//синдром
if (t.length <= 1) {//когда буква
 num = place(t).toString(2);
	for (let i = 0; i < 12; i++) {// Получаем начальный вектор
		if (exp(i)) start[i] = 0
		else {start[i] = num[y]; y++;}
	}
	y=0;
for (let k = 0; k < 4; k++) {// Вычисляем синдром
	for (let z = 0; z < start.length; z++) {
		if (start[z] == 1 && matrix[k][z] == 1) u++;
	}
synd[k] = u%2;
u=0;
}
for (let l = 0; l < 8; l++) {// Подставляем синдром
	if (exp(l)) {start[l] = synd[y]; y++;}
}
y=0;
ans.innerHTML = '';
ans.innerHTML = t+' - '+start.join('');
}//конец одной буквы

else {//когда слово
	ans.innerHTML = '';
	for (let a = 0; a < t.length; a++) {
	num = place(t[a]).toString(2);
	for (let i = 0; i < 12; i++) {// Получаем начальный вектор
		if (exp(i)) start[i] = 0
		else {start[i] = num[y]; y++;}
	}
	y=0;
for (let k = 0; k < 4; k++) {// Вычисляем синдром
	for (let z = 0; z < start.length; z++) {
		if (start[z] == 1 && matrix[k][z] == 1) u++;
	}
synd[k] = u%2;
u=0;
}
for (let l = 0; l < 8; l++) {// Подставляем синдром
	if (exp(l)) {start[l] = synd[y]; y++;}
}
y=0;
ans.innerHTML += t[a]+' - '+start.join('')+'<br>';
	}
}
}
function place(x) {
let	abc = ['А','Б','В','Г','Д','Е','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я','а','б','в','г','д','е','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я'];
	for (let i = 0; i < abc.length; i++) {
		if (abc[i] == x) return i+192;
	}
}
function exp(x) {
	let i = 0;
	while (2**i != 16) {
		if (2**i == x+1) return true
		i++;
	}
	return false
}
btn.addEventListener('click', (f) => {
 f.preventDefault();
 if (text.value.trim().length == 0) alert('Введите букву или слово')
 else hm(text.value)
});