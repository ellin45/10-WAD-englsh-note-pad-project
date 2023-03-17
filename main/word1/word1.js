document.addEventListener('DOMContentLoaded', function() {
  const button1 = document.querySelector('#iffy');
  const button2 = document.querySelector('#know');
  const button3 = document.querySelector('#idk');
  
  const box = document.querySelector('#box');
  const btnWord = document.querySelector('#word');
  const btnWord1 = document.querySelector('#mean');
  
  btnWord.addEventListener('click', getWordInfo);
  
   // #mean 버튼 숨기기
   btnWord1.classList.add('hide');
  
   button1.addEventListener('click', function() {
     // #mean 버튼 보이게 하기
     btnWord1.classList.remove('hide');
   });
  
   button2.addEventListener('click', function() {
     // #mean 버튼 보이게 하기
     btnWord1.classList.remove('hide');
   });
  
   button3.addEventListener('click', function() {
     // #mean 버튼 보이게 하기
     btnWord1.classList.remove('hide');
  
     document.querySelector('#button').addEventListener('click', function() {
      // word 버튼 보이기
      document.querySelector('#word').classList.remove('hide');
      
      // mean 버튼 숨기기
      document.querySelector('#mean').classList.add('hide');
      
      // 버튼 클릭 이벤트 초기화
      document.querySelector('#iffy').removeEventListener('click', showMeanButton);
      document.querySelector('#know').removeEventListener('click', showMeanButton);
      document.querySelector('#idk').removeEventListener('click', showMeanButton);
    });
    
    function showMeanButton() {
      // mean 버튼 보이기
      document.querySelector('#mean').classList.remove('hide');
    }
    
    document.querySelector('#iffy').addEventListener('click', showMeanButton);
    document.querySelector('#know').addEventListener('click', showMeanButton);
    document.querySelector('#idk').addEventListener('click', showMeanButton);
  
    let count = 0;
  
  function showMeanButton() {
    const meanButton = document.getElementById("mean");
    meanButton.style.display = "block";
  }
  
  function handleClick(buttonId) {
    if (buttonId === "word") {
      const wordButton = document.getElementById("word");
      wordButton.style.display = "none";
    } else {
      showMeanButton();
    }
    count++;
    if (count >= 10) {
      window.location.href = "word2.html";
    }
  }
  
  function reset() {
    const wordButton = document.getElementById("word");
    const meanButton = document.getElementById("mean");
    wordButton.style.display = "block";
    meanButton.style.display = "none";
    count = 0;
  }
   });
  });
