import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={formEl:document.querySelector(".form-ip-finder"),cardInfo:document.querySelector(".ip-card-container")};function f(s){const a="https://ip-geolocation-ipwhois-io.p.rapidapi.com",n="/json/",i=new URLSearchParams({ip:s}),e=`${a}${n}?${i}`;return fetch(e,{headers:{"X-RapidAPI-Key":"f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1","X-RapidAPI-Host":"ip-geolocation-ipwhois-io.p.rapidapi.com"}}).then(o=>o.json())}t.formEl.addEventListener("submit",d);function d(s){s.preventDefault();const a=s.target.elements.query.value;f(a).then(n=>{const i=m(n);t.cardInfo.innerHTML=i}),s.target.reset()}function m({country:s,ip:a,city:n,country_flag:i,currency:e,timezone:l,completed_requests:o,currency_rates:p,latitude:c,longitude:r}){return`<div class="ip-container">
  <div class="info-item">
  <img class="flag-of-country" src="${i}" alt="Flag of ${s}">
  <span class="info-label">Country:</span>
  <span class="info-value">${s}</span>
</div>

<div class="info-item">
  <span class="info-label">IP Address:</span>
  <span class="info-value">${a}</span>
</div>

<div class="info-item">
  <span class="info-label">City:</span>
  <span class="info-value">${n}</span>
</div>

<div class="info-item">
  <span class="info-label">Time zone:</span>
  <span class="info-value">${l}</span>
</div>

<div class="info-item">
  <span class="info-label">Currency:</span>
  <span class="info-value">${e}</span>
</div>

<div class="info-item">
  <span class="info-label">Currency Rate:</span>
  <span class="info-value">${p}</span>
</div>

<div class="info-item">
  <span class="info-label">Completed request:</span>
  <span class="info-value">${o}</span>
</div>

<div class="info-item">
  <span class="info-label">Google Maps:</span>
  <a href="https://www.google.com/maps/place/@${c},${r},17z/data=!3m1!4b1!4m4!3m3!8m2!3d50.4501!4d30.5234?entry=ttu" target="_blank">Link</a>

  </div>
  </div>`}
//# sourceMappingURL=commonHelpers4.js.map
