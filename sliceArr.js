export default function (arr, min, max) {
 const arrLength = arr.length;
 let m,
  l = 0,
  r = arrLength;
 while (l < r) {
  m = ~~(l + (r - l) / 2);
  if (arr[m] <= min) l = m + 1;
  else if (arr[m] > max) r = m;
  else break;
 }
 let lr = m,
  rl = m;
 while (l < lr) {
  m = ~~(l + (lr - l) / 2);
  if (arr[m] < min) l = m + 1;
  else lr = m;
 }
 while (rl < r) {
  m = ~~(rl + (r - rl) / 2);
  if (arr[m] >= max) r = m;
  else rl = m + 1;
 }
 return [l > 0 ? l - 1 : l, r >= arrLength ? r - 1 : r];
}
