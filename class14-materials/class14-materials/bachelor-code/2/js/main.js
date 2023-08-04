const andi = document.querySelector('#andi')
const claire = document.querySelector('#claire')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#andiNext').addEventListener('click', A)
document.querySelector('#claireNext').addEventListener('click', C)
document.querySelector('#sharleenNext').addEventListener('click', S)

function A() {
	andi.classList.toggle('hidden')
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.add('hidden')
	claire.classList.toggle('hidden')
	sharleen.classList.add('hidden')
}
