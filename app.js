const display = document.querySelector('.display');
// display.insertAdjacentHTML('beforeend', `<h3>音声1-1</h3><audio controls src="./test.wav"></audio>`);

function displayWav(labelNum, wavNum){
  if(wavNum == 0) {
    display.insertAdjacentHTML('beforeend', `<h3 id="id${labelNum}">音声${labelNum}</h3><audio controls src="./test.wav"></audio>`);
  } else {
    display.insertAdjacentHTML('beforeend', `<h3 id="id${labelNum}">音声${labelNum}</h3><audio controls src="./test (${wavNum}).wav"></audio>`);
  }
}
let labelNum = 0;
for(let i = 0; i < 60; i++){
  if(i == 20 || i == 43) {
    continue;
  }
  labelNum++;
  displayWav(labelNum,i);
}
