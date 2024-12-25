const baseURL = 'https://nomoreparties.co/v1/cohort-mag-4';
const headers = {
  'Authorization': '028fd52d-9c19-406e-9401-6ba147290fb8',
  'Content-Type': 'application/json',
};

const $fetch = (method, uri, body = {}) => {
  const options = {
    method,
    headers,
  };

  if (Object.keys(body).length) {
    options['body'] = JSON.stringify(body);
  }

  return fetch(`${baseURL}${uri}`, options).then((response) => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(response.status);
  });
};

export const MestoAPI = {
  fetchCards() {
    return $fetch('GET', '/cards');
  },

  storeCard({ name, link }) {
    return $fetch('POST', '/cards', { name, link });
  },

  deleteCard(id) {
    return $fetch('DELETE', `/cards/${id}`);
  },

  likeCard(id) {
    return $fetch('PUT', `/cards/likes/${id}`);
  },

  unLikeCard(id) {
    return $fetch('DELETE', `/cards/likes/${id}`);
  },

  fetchProfile() {
    return $fetch('GET', '/users/me');
  },

  updateProfile({ name, about }) {
    return $fetch('PATCH', '/users/me', { name, about });
  },

  updateProfileAvatar(url) {
    return $fetch('PATCH', '/users/me/avatar', { avatar: url });
  },
};
