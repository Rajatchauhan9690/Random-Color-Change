function changeBackgroundColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
 document.getElementById('colorName').textContent = randomColor;
}

//  function copyBackgroundColor() {
//  const colorText = document.getElementById('colorName').textContent;
//  navigator.clipboard.writeText(colorText)
//     .then(() => alert('Color ' + colorText + ' copied to clipboard'))
//     .catch(() => alert('Failed to copy color'));
}

document.getElementById('colorChanger').addEventListener('click', changeBackgroundColor);
//document.getElementById('copyColor').addEventListener('click', copyBackgroundColor);
