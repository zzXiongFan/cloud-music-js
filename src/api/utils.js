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
