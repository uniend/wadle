// 화면이 켜지고 키보드를 누르면 작동이 되기 떄문에 특정 dom을 불러오는게 아닌 윈도우를 다뤄야함 


function gameStart(){

  //2. 키가 눌리면 다음 함수가 실행 
  //암묵적으로  () 파라미터에 실행된 동작에대한 내용이 정리된 이벤트가 전달된다. 
  const handleKeydown = (e) => {
    // console.log('키가 눌렸습니다. 이벤트 보기 ' , e);
    // console.log(e.key, e.keyCode);

    const key = e.key.toUpperCase();
    const keyCode = e.keyCode;
    console.log(keyCode);

  }


  //1. 윈도우를 눌렀을떄 키와 관련된 이벤트 등록 
  window.addEventListener('keydown', handleKeydown)
}






gameStart();