import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t={formEl:document.querySelector(".form-hero"),heroEl:document.querySelector(".hero-container")};t.formEl.addEventListener("submit",n);function n(e){e.preventDefault();const s=e.target.elements.query.value.trim();o(s).then(a=>{const r=i(a);t.heroEl.insertAdjacentHTML("beforeend",r)})}function o(e){const s="https://superhero-search.p.rapidapi.com/api/",a=new URLSearchParams({hero:e}),r=`${s}?${a}`;return fetch(r,{headers:{"X-RapidAPI-Key":"f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1","X-RapidAPI-Host":"superhero-search.p.rapidapi.com"}}).then(p=>p.json())}function i(e){return`<div class="hero-card">
  <div class="image-container">
      <img class="hero-img" src="${e.images.lg}" alt="#">
  </div>
  <div class="hero-body">
      <h2 class="hero-title">${e.name}</h2>
      <div class="hero-powerstats">
          <p class="hero-item">FullName - ${e.biography.fullName}</p>
          <p class="hero-item">Publisher - ${e.biography.publisher}</p>
          <p class="hero-item">Alignment - ${e.biography.alignment}</p>
          <p class="hero-item">Gender - ${e.appearance.gender}</p>
          <p class="hero-item">Race - ${e.appearance.race}</p>
      </div>
      <div class="hero-powerstats">
          <span>Power: ${e.powerstats.power}</span>
          <span>Strength: ${e.powerstats.strength}</span>
          <span>Speed: ${e.powerstats.speed}</span>
          <span>Combat: ${e.powerstats.combat}</span>
      </div>
  </div>
</div>`}
//# sourceMappingURL=commonHelpers.js.map
