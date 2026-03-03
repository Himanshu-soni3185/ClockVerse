function Digitalclock() {
  const sCounter = document.querySelector('.s-counter');
  const mCounter = document.querySelector('.m-counter');
  const hCounter = document.querySelector('.h-counter');


  setInterval(() => {
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr  = now.getHours() % 12;
    
    if(`${sec}`.length==1) {
        sCounter.innerHTML=`0${sec}`
    }
    else{
        sCounter.innerHTML=sec
    }
    if(`${min}`.length==1) {
        mCounter.innerHTML=`0${min}`
    }
    else{
        mCounter.innerHTML=min
    }
    if(`${hr}`.length==1) {
        hCounter.innerHTML=`0${hr}`
    }
    else{
        hCounter.innerHTML=hr
    }

    

    
  }, 1000);
}
Digitalclock()