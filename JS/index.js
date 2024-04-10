// 기능별로 함수 나누기 
// 1. 게임시작 함수 
      // 윈도우 작동 키보드 이벤트 발생 
// 2. html에 타자 넣는 함수 
        // 타자 입력하는 이벤트,
// 3. 정답을 맞추는 함수 
// 4. 문자를 지우는 함수 
// 5. 게임종료 함수 
// 6. 다음줄로 넘기는 함수 

// 제한 
// 총 6번 시도, 한번 시도 당 5번의 입력, 
// 알파벳 외의 숫자 입력 제한 
// 정답과 위치가 맞는다면 초록색상
// 정답에는 포함되었지만 글자 위치가 다르면 노랑색
// 아무것도 해당되지 않는 경우 회색 색상 
// 


//정답 코드 
const answer = 'APPLE';
let Attempt = 0;
let chance = 0;
let times; 

function gameStart(){

  // 게임오버 효과 기능 
  const gameOverStyle = () => {
    const div = document.createElement('div');
    document.body.append(div);
    div.classList.toggle('gameover');
  }

  //뒤로가기 기능 
  const backSpace = () => {
    if( chance > 0){
      const preBlock = document.querySelector(`.board-block[data-index="${Attempt}${chance -1}"]`);
      preBlock.innerHTML = '';
    }
    if(chance != 0 ) chance -= 1;
    

  }


 // 게임종료하는 기능 
  const gameOver = () => {
    window.removeEventListener('keydown', handlekeyborad);
    gameOverStyle();
    clearInterval(times);
  }

  // 다음줄로 넘기는 기능 
  const nextLine = () => {
    if(Attempt === 6) return gameOver();
    Attempt += 1;
    chance = 0; 
  }


  // 정답을 확인하는 코드 enter 키일때 
  const handleEnter = () => {
    let answerNum = 0;
    for(let i =0; i < 5; i++){
      const block =  document.querySelector(`.board-block[data-index="${Attempt}${i}"]`);
      const userAnswer = block.innerHTML;
      const checkAnswer = answer[i];
      if(userAnswer === checkAnswer) {
        answerNum +=1;
        block.classList.add('green'); 
      }
      else if(answer.includes(userAnswer)) block.classList.add('yellow'); 
      else block.classList.add('gray'); 
  };

  if( answerNum === 5) gameOver();
  nextLine();
}

  // 타자를 넣는 함수 
  const handlekeyborad = (e) => {
    const key = e.key.toUpperCase();
    const keyCode = e.keyCode;
    const block = document.querySelector(`.board-block[data-index="${Attempt}${chance}"]`);


    if(e.key === 'Backspace')  backSpace();
    else if(chance === 5){
      if(e.key ==='Enter') handleEnter();
      else  return;
      
    }else if(keyCode >= 65 && keyCode <= 90){
      block.innerHTML = key;
      chance += 1;
    }

    
  }

  const startTimer = () => {
    const stndTime = new Date();


      function timer(){
        // 실시간 시간을 불러와야함 
        const nowTime = new Date();
        const resultTime = new Date(nowTime - stndTime);
        const min = resultTime.getMinutes().toString().padStart();
        const second = resultTime.getSeconds().toString().padStart();
        const Time = document.querySelector('.timer');
        Time.innerHTML = `${min} : ${second}`;
      }

      timer();
      times = setInterval(timer, 1000);
  }

  startTimer();
  window.addEventListener('keydown', handlekeyborad)

};

gameStart();