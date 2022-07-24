let capturedInfo = document.querySelector('.captured-key');
let keyType = document.querySelector('#key-type');

const showKey = (e) => {
  let infoObject = {
    'e.code': e.code,
    'e.charCode': e.charCode,
    'e.key': e.key,
    'e.keyCode': e.keyCode,
  };
  let infoString = '';
  Object.keys(infoObject).forEach((val) => {
    infoString = infoString + `<br/>` + val + ' : ' + infoObject[val];
  });
  capturedInfo.innerHTML = infoString;
  console.log(e);
};

document.addEventListener('keydown', showKey);

keyType.onchange = () => {
  console.log(keyType.value);
  if (keyType.value === 'keypress') {
    document.removeEventListener('keydown', showKey);
    document.removeEventListener('keyup', showKey);
    document.addEventListener('keypress', showKey);
  } else if (keyType.value === 'keydown') {
    document.removeEventListener('keypress', showKey);
    document.removeEventListener('keyup', showKey);
    document.addEventListener('keydown', showKey);
  } else {
    document.removeEventListener('keypress', showKey);
    document.removeEventListener('keydown', showKey);
    document.addEventListener('keyup', showKey);
  }
};
