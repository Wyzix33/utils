export default function (sec, placeholder = '', spl = ':') {
 if (typeof sec === 'undefined') return placeholder;
 let h = Math.floor(sec / 3600),
  m = Math.floor((sec - h * 3600) / 60);
 if (h < 10) h = '0' + h;
 if (m < 10) m = '0' + m;
 return h + spl + m;
}
