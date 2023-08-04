let andi = document.querySelector('#andi')
let claire = document.querySelector('#claire')
let sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', onlyAndi)
document.querySelector('#claireNext').addEventListener('click', onlyClaire)
document.querySelector('#sharleenNext').addEventListener('click', onlySharleen)

function onlyAndi(){
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
}

function onlyClaire(){
	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')
}

function onlySharleen(){
	sharleen.classList.toggle('hidden')
	andi.classList.add('hidden')
	claire.classList.add('hidden')
}