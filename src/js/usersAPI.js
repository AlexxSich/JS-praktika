// ================ REQUEST TO SERVER ====================================
// ================ GET ===============================================
export function getUsers() {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';

  const url = `${BASE_URL}${END_POINT}`;

  return fetch(url).then(res => res.json());
}

// ==================== POST ======================
// відправляємо данні на сервер які збираємо в обєкт userObj з форми Create user card і перетворюємо їх в формат JSON
// після відправки отримуємо відповідь від сервера обєкт (res - response) з даними які були записані
// в ціому обєкті є купа різної інфи, і є метод .json() в якому знаходяться наші дані які
// записалися в базу і за допомогою then(res => res.json()) отримуємо їх

export function createUser(userObj) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = `${BASE_URL}${END_POINT}`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObj),
  };

  return fetch(url, options).then(res => res.json());
}

// ======================= PATCH ========================

export function updateUser({ id, ...user }) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return fetch(url, options).then(res => res.json());
} //

// ======================== PUT =========================

export function rewriteUser({ id, ...user }) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  };

  return fetch(url, options).then(res => res.json());
}

// ========================  DELETE =========================
export function deleteUser(id) {
  const BASE_URL = 'http://localhost:3000';
  const END_POINT = '/users';
  const url = `${BASE_URL}${END_POINT}/${id}`;

  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}
