var zero = document.getElementById('zero')
var zerotextcontent = parseInt(zero.textContent)
var increment = document.getElementById('increment')
increment.addEventListener("click", () => {
    zerotextcontent = zerotextcontent + 1
    zero.innerHTML = zerotextcontent
})
var decrement = document.getElementById('decrement')
decrement.addEventListener("click", () => {
    console.log('decrementé')
    if (zerotextcontent > 0) {
        zerotextcontent = zerotextcontent - 1
        zero.innerHTML = zerotextcontent
    }
})
