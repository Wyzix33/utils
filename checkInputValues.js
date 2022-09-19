export default function (i, v) {
 if ((i.type === 'number' && i.min && v < i.min) || (i.type === 'number' && i.max && v > i.max)) return false;
 return true;
}
