const title = document.getElementById('header-title')
const conversionButton = document.getElementById('buttonConvert')

conversionButton.addEventListener('click', function() {
    title.innerHTML = "holla"
})

function changeTitle() {
    title.innerHTML = "hello"
}

const integerRegex = /^-?\d+$/
console.log(integerRegex.test("10asd"))