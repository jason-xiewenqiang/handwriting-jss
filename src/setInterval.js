

function myInterval (fn, delay) {
    let timer  = null;
    function interval() {
        fn()
        timer = setTimeout(interval, delay)
    }
    interval()
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}