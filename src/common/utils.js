export function formatDate(date,fmt){
    if( /(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length));
    };
    let dateObj ={
        'M+':date.getMonth() + 1,
        'd+':date.getDate(),
        'h+':date.getHours(),
        'm+':date.getMinutes(),
        's+':date.getSeconds()
    };
    function padLeftZero(str){
        return ('00'+str).substr(str.length);
    };
    for(let i in dateObj){
        if(new RegExp(`(${i})`).test(fmt)){
            let str =dateObj[i]+'';
            fmt=fmt.replace(RegExp.$1,(RegExp.$1.length === 1 ? str: padLeftZero(str)))
        }
    };
    return fmt;
};

export function debounce(func, delay) {
    let timer = null
    return function (...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }