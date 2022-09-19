export default function (fn, time) {
 let timeout;
 return function (args) {
  clearTimeout(timeout);
  timeout = setTimeout(fn.bind(this, args), time);
 };
}
