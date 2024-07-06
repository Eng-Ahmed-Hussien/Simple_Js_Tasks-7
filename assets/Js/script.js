      let hr = "00",
        min = "00",
        sec = "00",
        ms = "00";
      let startTimer;

      const startBtn = document.querySelector(".start"),
        stopBtn = document.querySelector(".stop"),
        resetBtn = document.querySelector(".reset");

      startBtn.addEventListener("click", start);
      stopBtn.addEventListener("click", stop);
      resetBtn.addEventListener("click", reset);

      function start() {
        startBtn.classList.add("active");
        stopBtn.classList.remove("stopActive");

        startTimer = setInterval(() => {
          ms++;
          ms = ms < 10 ? "0" + ms : ms;

          if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "00";
          }
          if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "00";
          }
          if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "00";
          }

          putValue();
        }, 10); // 1000ms = 1s
      }

      function stop() {
        startBtn.classList.remove("active");
        stopBtn.classList.add("stopActive");
        clearInterval(startTimer);
      }

      function reset() {
        startBtn.classList.remove("active");
        stopBtn.classList.remove("stopActive");
        clearInterval(startTimer);
        hr = min = sec = ms = "00";
        putValue();
      }

      function putValue() {
        document.querySelector(".hour").innerText = hr;
        document.querySelector(".minute").innerText = min;
        document.querySelector(".second").innerText = sec;
        document.querySelector(".millisecond").innerText = ms;
      }