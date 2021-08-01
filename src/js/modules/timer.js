const timer = (timerSelector, deadline) => {
   function calculateTime(deadline) {
      const t = Date.parse(deadline) - Date.parse(new Date()),
         days = Math.floor(t / (1000 * 60 * 60 * 24)),
         hours = Math.floor((t / (1000 * 60 * 60)) % 24),
         minutes = Math.floor((t / (1000 * 60)) % 60),
         seconds = Math.floor((t / 1000) % 60);

      return {
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
      }
   }

   function getZero(num) {
      if (num >= 0 && num < 10) {
         return `0${num}`
      } else {
         return num
      }
   }

   function getTime(timerSelector, deadline) {
      const timer = document.querySelector(timerSelector),
         days = timer.querySelector('#days'),
         hours = timer.querySelector('#hours'),
         minutes = timer.querySelector('#minutes'),
         seconds = timer.querySelector('#seconds'),
         remainingTime = setTimeout(showTime, 1000)

      showTime()

      function showTime() {
         const t = calculateTime(deadline)

         days.innerHtML = getZero(t.days)
         hours.innerHtML = getZero(t.hours)
         minutes.innerHtML = getZero(t.minutes)
         seconds.innerHtML = getZero(t.seconds)

         if (t.total <= 0) {
            days.textContent = "00"
            hours.textContent = "00"
            minutes.textContent = "00"
            seconds.textContent = "00"

            clearInterval(remainingTime)
         }
      }
   }
   getTime(timerSelector, deadline)
}

export default timer