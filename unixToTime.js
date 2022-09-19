export default function (unix, placeholder = '', spl = ':') {
 if (!unix) return placeholder;
 let h, m;
 m = Math.floor(unix / 60);
 h = Math.floor(m / 60);
 m %= 60;
 h %= 24;
 if (h < 10) h = '0' + h;
 if (m < 10) m = '0' + m;
 return h + spl + m;
}
