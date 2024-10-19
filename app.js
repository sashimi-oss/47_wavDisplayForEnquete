const display = document.querySelector('.display');
// display.insertAdjacentHTML('beforeend', `<h3>音声1-1</h3><audio controls src="./test.wav"></audio>`);

function displayWav(wavNum){
  if(wavNum == 0) {
    display.insertAdjacentHTML('beforeend', `<h3>音声${wavNum}</h3><audio controls src="./test.wav"></audio>`);
  } else {
    display.insertAdjacentHTML('beforeend', `<h3>音声${wavNum}</h3><audio controls src="./test (${wavNum}).wav"></audio>`);
  }
}
for(let i = 0; i < 5; i++){
  displayWav(i);
}