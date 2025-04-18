const digitalClock = document.getElementById('digitalClock')
const messageContainer = document.getElementById('messageContainer')

function getMotivationalMessage(hour, minutes) {
  const totalMinutes = hour * 60 + minutes;

  if (totalMinutes >= 1 && totalMinutes <= 420) {
    return "Demasiado por hoy. Vete a dormir ya";
  } else if (totalMinutes >= 421 && totalMinutes <= 720) {
    return "¡Buenos días! Anima esa cara y mucho ánimo con tu día";
  } else if (totalMinutes >= 721 && totalMinutes <= 840) {
    return "Sigue así, pero no olvides comer dentro de un rato";
  } else if (totalMinutes >= 841 && totalMinutes <= 960) {
    return "Espero que hayas comido";
  } else if (totalMinutes >= 961 && totalMinutes <= 1080) {
    return "Venga, tú puedes, un último empujón";
  } else if (totalMinutes >= 1081 && totalMinutes <= 1320) {
    return "Esto ya es demasiado... deberías parar pronto";
  } else {
    return "¡Buenas noches! Es hora de descansar";
  }
}

function editClock() {
  const date = new Date();

  let dateParts = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };

  for (let key in dateParts) {
    if (key !== "year" && dateParts[key] < 10) {
      dateParts[key] = `0${dateParts[key]}`;
    }
  }

  digitalClock.innerHTML = `
    <p>${dateParts.hours}:${dateParts.minutes}:${dateParts.seconds}</p>
    <p>${dateParts.day}/${dateParts.month}/${dateParts.year}</p>
  `;

  const message = getMotivationalMessage(date.getHours(), date.getMinutes());
  messageContainer.innerHTML = `<p>${message}</p>`;
}

const interval = setInterval(editClock, 1000);