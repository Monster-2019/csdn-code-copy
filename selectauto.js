const host = window.location.host

if (host === 'blog.csdn.net') {
    let preElList = document.querySelectorAll('pre')
    preElList.forEach(el => {
        el.style.userSelect = 'auto'
        let codeEl = el.querySelector('code')
        codeEl.style.userSelect = 'auto'
    })
} else {
    console.log('该网站不是csdn网站!!!')
}