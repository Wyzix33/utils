export default function (arr, min, max, what = 'time') {
 const arrLength = arr.length;
 let l = 0,
  m,
  r = arrLength;
 while (l < r) {
  m = ~~(l + (r - l) / 2);
  if (arr[m][what] <= min) l = m + 1;
  else if (arr[m][what] > max) r = m;
  else break;
 }
 let lr = m,
  rl = m;
 while (l < lr) {
  m = ~~(l + (lr - l) / 2);
  if (arr[m][what] <= min) l = m + 1;
  else lr = m;
 }
 while (rl < r) {
  m = ~~(rl + (r - rl) / 2);
  if (arr[m][what] >= max) r = m;
  else rl = m + 1;
 }
 return [l > 0 ? l - 1 : l, r > 0 ? r - 1 : r];
}
