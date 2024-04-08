const refs = {
  formEl: document.querySelector('.form-ip-finder'),
  cardInfo: document.querySelector('.ip-card-container'),
};

// ============REQUEST TO THE SERVER=======================
function getInfoByIP(userIp) {
  const BASE_URL = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com';
  const END_POINT = '/json/';
  const params = new URLSearchParams({
    ip: userIp,
  });

  const url = `${BASE_URL}${END_POINT}?${params}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
    },
  };
  return fetch(url, options).then(res => res.json());
}

// ============== ADD LISTENER================
refs.formEl.addEventListener('submit', ipSubmitHandler);

function ipSubmitHandler(event) {
  event.preventDefault();

  const userIp = event.target.elements.query.value;

  getInfoByIP(userIp).then(data => {
    const markup = templateIp(data);
    refs.cardInfo.innerHTML = markup;
  });
  event.target.reset();
}

// ==============RENDER=======================

function templateIp({
  country,
  ip,
  city,
  country_flag,
  currency,
  timezone,
  completed_requests,
  currency_rates,
  latitude,
  longitude,
}) {
  return `<div class="ip-container">
  <div class="info-item">
  <img class="flag-of-country" src="${country_flag}" alt="Flag of ${country}">
  <span class="info-label">Country:</span>
  <span class="info-value">${country}</span>
</div>

<div class="info-item">
  <span class="info-label">IP Address:</span>
  <span class="info-value">${ip}</span>
</div>

<div class="info-item">
  <span class="info-label">City:</span>
  <span class="info-value">${city}</span>
</div>

<div class="info-item">
  <span class="info-label">Time zone:</span>
  <span class="info-value">${timezone}</span>
</div>

<div class="info-item">
  <span class="info-label">Currency:</span>
  <span class="info-value">${currency}</span>
</div>

<div class="info-item">
  <span class="info-label">Currency Rate:</span>
  <span class="info-value">${currency_rates}</span>
</div>

<div class="info-item">
  <span class="info-label">Completed request:</span>
  <span class="info-value">${completed_requests}</span>
</div>

<div class="info-item">
  <span class="info-label">Google Maps:</span>
  <a href="https://www.google.com/maps/place/@${latitude},${longitude},17z/data=!3m1!4b1!4m4!3m3!8m2!3d50.4501!4d30.5234?entry=ttu" target="_blank">Link</a>

  </div>
  </div>`;
}
