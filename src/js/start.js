function analogclock() {
  const sHand = document.querySelector('.s-hands');
  const mHand = document.querySelector('.m-hands');
  const hHand = document.querySelector('.h-hands');

  // Class assignments removed - styling is handled directly in analog.html
  setInterval(() => {
    const now = new Date();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr  = now.getHours() % 12;

    const sAngle = -90 + sec * 6;
    const mAngle = -90 + min * 6 + sec * 0.1;
    const hAngle = -90 + hr * 30 + min * 0.5;

    sHand.style.transform = `rotateZ(${sAngle}deg)`;
    mHand.style.transform = `rotateZ(${mAngle}deg)`;
    hHand.style.transform = `rotateZ(${hAngle}deg)`;
  }, 1000);
}

analogclock();
 

