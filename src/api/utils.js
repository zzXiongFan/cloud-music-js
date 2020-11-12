export const getCount = (count) => {
  if(!count) return;
  if(count < 1000) {
    return count;
  } else if (Math.floor(count / 1000) < 1000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor (count / 10000000)/ 10 + "亿";
  }
}

// 防抖函数
export const debounce = function(func, delay) {
  let timer;
  return function(...args) {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
      clearTimeout(timer);
    }, delay);
  }
}
