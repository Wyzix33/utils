export default function (size, extension) {
 if (size > 100 * 1024 * 1024) {
  console.log('Fisier prea mare ... '); // in MiB
  return false;
 }
 if (['jpg', 'jpeg', 'png', 'ddd', 'mp4', 'pdf'].indexOf(extension) < 0) {
  console.log('Extensie invalida ... ');
  return false;
 }
 return true;
}
