const horPhone = document.getElementById('phone-hor-img');
const vertPhone = document.querySelector('#phone-vert-img');
const blackHorPhone = document.getElementById('black-phone-hor');
const blackVertPhone = document.getElementById('black-phone-vert');

horPhone.addEventListener('click', ()=>{revert(blackHorPhone)});
vertPhone.addEventListener('click', ()=>{revert(blackVertPhone)});
blackHorPhone.addEventListener('click', ()=>{revert(blackHorPhone)});
blackVertPhone.addEventListener('click', ()=>{revert(blackVertPhone)});

function revert(phone) {
	if (phone.style.backgroundColor != 'black') {
		phone.style.backgroundColor = 'black'
	}
	else {
		phone.style.backgroundColor = 'transparent'
	}
}

const all = document.getElementById('button-all');
const web = document.getElementById('button-web');
const graphic = document.getElementById('button-graphic');
const artwork = document.getElementById('button-artwork');

all.addEventListener('click', ()=>{
	document.querySelector('.selected').classList.remove('selected');
	all.classList.add('selected')
	randomImages()
});
web.addEventListener('click', ()=>{
	document.querySelector('.selected').classList.remove('selected');
	web.classList.add('selected')
	randomImages()
});
graphic.addEventListener('click', ()=>{
	document.querySelector('.selected').classList.remove('selected');
	graphic.classList.add('selected')
	randomImages()});
artwork.addEventListener('click', ()=>{
	document.querySelector('.selected').classList.remove('selected');
	artwork.classList.add('selected')
	randomImages()});

const images = Array.from(document.querySelectorAll('.portfolio-images-item'));

function randomImages() {
images.sort(function(){
	return Math.random() - 0.5;
})
document.querySelector('.portfolio-images').append(...images);
}

images.forEach(element => {
	element.addEventListener('click',()=>{
		if (!!document.querySelector('.active-img')){
			document.querySelector('.active-img').classList.remove('active-img');
		}
		element.classList.add('active-img');
	})
});

const form = document.querySelector('.data-input');
const win = document.querySelector('.window')
const buttonOK = document.querySelector('.window__ok');
const topic = document.querySelector('.window__topic')
const description = document.querySelector('.window__description')
const inputSubject = document.querySelector('.input-subject')
const inputDescribe = document.querySelector('.input-describe')

form.onsubmit = function() {
	win.style.display='flex'
	topic.innerHTML = inputSubject.value === '' ? 'Без темы' : 'Тема: &#160;&#160;' + inputSubject.value;
	description.innerHTML = inputDescribe.value === '' ? 'Без описания' : 'Описание: &#160;&#160;' + inputDescribe.value 
	return false
}


buttonOK.addEventListener('click', ()=>{
	win.style.display='none'
	form.reset()
}
)

const sliders = document.querySelectorAll('.slider__item');
let activeIndex = 0;
let index = null;
const prev = document.querySelector('.arrow-left')
const next = document.querySelector('.arrow-right')
prev.addEventListener('click', getPrevSlide)
next.addEventListener('click', getNextSlide)

function getPrevSlide() {
	index = activeIndex - 1;
	if (index === -1) {index = sliders.length - 1}
	sliders[index].classList.add('prev', 'left-to-right');
	sliders[activeIndex].classList.add('left-to-right');
	sliders[index].addEventListener('animationend', classesChange)
}
function getNextSlide() {
	index = activeIndex + 1
	if(index === sliders.length){ index = 0}
	sliders[index].classList.add('next', 'right-to-left')
	sliders[activeIndex].classList.add('right-to-left');
	sliders[index].addEventListener('animationend', classesChange)
}

function classesChange() {
	sliders[index].classList.remove('prev', 'next', 'left-to-right', 'right-to-left')
	sliders[index].classList.add('active')
	sliders[activeIndex].classList.remove('active','left-to-right', 'right-to-left')
	sliders[index].removeEventListener('animationend', classesChange)
	activeIndex = index
}


const anchors = document.querySelectorAll('.anchor')
const anchorsArr = Array.from(anchors)
anchorsArr.forEach(item=>{
	item.addEventListener('click', ()=>{
		document.querySelector('.active-anchor').classList.remove('active-anchor')
		item.classList.add('active-anchor')
	})
})


window.addEventListener('scroll', ()=>{
	const offset = window.pageYOffset;
	document.querySelector('.active-anchor').classList.remove('active-anchor')
	switch (true) {
		case offset>=0&&offset<=556:
			document.querySelector('.anchor-main').classList.add('active-anchor')
			break;
		case offset>=557&&offset<=1035:
			document.querySelector('.anchor-service').classList.add('active-anchor')
			break;
		case offset>=1036&&offset<=1911:
			document.querySelector('.anchor-portfolio').classList.add('active-anchor')
			break;
		case offset>=1912&&offset<=2706:
			document.querySelector('.anchor-about').classList.add('active-anchor')
			break;
		case offset>=2707:
			document.querySelector('.anchor-contact').classList.add('active-anchor')
			break;
		default:;
	} 
	
})