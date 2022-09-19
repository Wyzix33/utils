export default function (callback) {
 let active = false;
 let evt;
 const handler = function () {
  active = false;
  callback(evt);
 };
 return function handleEvent(e) {
  evt = e;
  if (!active) {
   active = true;
   requestAnimationFrame(handler);
  }
 };
}
