let btn = document.querySelector('.btn')
let h = document.querySelector('.title')
let l = document.querySelector('.ko')
let la = document.querySelector('.koa')
let laa = document.querySelector('.koaa')

btn.addEventListener('click', function(){
    if (h.classList.contains('test')) {
            h.classList.remove('test')
    } else {
        h.classList.add('test')
    }
    if (l.classList.contains('te')) {
        l.classList.remove('te')
} else {
    l.classList.add('te')
}
if (la.classList.contains('te')) {
    la.classList.remove('te')
} else {
la.classList.add('te')
}
if (laa.classList.contains('te')) {
    laa.classList.remove('te')
} else {
laa.classList.add('te')
}
})