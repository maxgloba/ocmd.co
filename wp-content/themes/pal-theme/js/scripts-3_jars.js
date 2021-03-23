// Timer
(function(){

  const timer_counter = e => {
    const deadTime = '<i>00</i>:<i>00</i>:<i>00</i>';
    if(!e.dataset.time) return deadTime;
    const
      now = new Date(),
      timer = setInterval(() => {
        const
          deadline = new Date( now.getTime() + Number(e.dataset.time) * 60000 ),
          dateNow = new Date(),
          t = deadline - dateNow;

        let
          h = Math.floor((t % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60)),
          m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
          s = Math.floor((t % (1000 * 60)) / 1000);

        h = (h < 10) ? `0${h}` : h;
        m = (m < 10) ? `0${m}` : m;
        s = (s < 10) ? `0${s}` : s;

        if (t < 0) clearInterval(timer);
        e.innerHTML = (t < 0) ? deadTime : `<i>${m}</i>:<i>${s}</i>`;
      }, 1000);
  }

  const Timers = document.querySelectorAll('[data-time]');
  Timers.forEach(timer => {
    timer_counter(timer);
  });

})();