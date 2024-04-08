const refs = {
  formEl: document.querySelector('.form-hero'),
  heroEl: document.querySelector('.hero-container'),
};

// ==============PODIYA - LISTENER=========================
refs.formEl.addEventListener('submit', inputSearch);

function inputSearch(event) {
  event.preventDefault();

  const query = event.target.elements.query.value.trim();
  getSuperHero(query).then(data => {
    const markup = heroTemplate(data);
    refs.heroEl.insertAdjacentHTML('beforeend', markup);
  });
}

// ============REQUEST===========================
function getSuperHero(query) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com/api/';
  const params = new URLSearchParams({
    hero: query,
  });

  const url = `${BASE_URL}?${params}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}
// =============RENDER===========================
function heroTemplate(hero) {
  return `<div class="hero-card">
  <div class="image-container">
      <img class="hero-img" src="${hero.images.lg}" alt="#">
  </div>
  <div class="hero-body">
      <h2 class="hero-title">${hero.name}</h2>
      <div class="hero-powerstats">
          <p class="hero-item">FullName - ${hero.biography.fullName}</p>
          <p class="hero-item">Publisher - ${hero.biography.publisher}</p>
          <p class="hero-item">Alignment - ${hero.biography.alignment}</p>
          <p class="hero-item">Gender - ${hero.appearance.gender}</p>
          <p class="hero-item">Race - ${hero.appearance.race}</p>
      </div>
      <div class="hero-powerstats">
          <span>Power: ${hero.powerstats.power}</span>
          <span>Strength: ${hero.powerstats.strength}</span>
          <span>Speed: ${hero.powerstats.speed}</span>
          <span>Combat: ${hero.powerstats.combat}</span>
      </div>
  </div>
</div>`;
}
//====================================
