export default function (file, fileName, contentType = 'csv') {
 const anchor = document.createElement('a');
 anchor.href = window.URL.createObjectURL(file);
 anchor.target = '_self';
 anchor.download = fileName + new Date().toLocaleString().replace(/[\W]+/g, '_') + '.' + contentType;
 document.body.appendChild(anchor);
 anchor.click();
 document.body.removeChild(anchor);
 window.URL.revokeObjectURL(file);
}
