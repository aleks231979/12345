class MainApi {
  constructor({ NODE_ENV }) {
    this._credentials = 'include';
    this._NODE_ENV = NODE_ENV;
  };

  _baseUrl = () => {
    if (this._NODE_ENV === 'production') {
      return 'https://mdiplomapi.nomoredomains.xyz';
    } else {
      return 'http://localhost:3000';
    };
  };

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(res.json())
  };

  _createdHeaders = () => {
    let basicHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }

    if (this._NODE_ENV !== 'production') {
      return basicHeaders = {
        ...basicHeaders,
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
      };
    } else {
      return basicHeaders;
    }
  }

  register(password, email, name) {
    return fetch(`${this._baseUrl()}/signup`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._createdHeaders(),
      body: JSON.stringify({ password, email, name }),
    })
      .then(this._checkResponse)
  };

  authorize(password, email) {
    return fetch(`${this._baseUrl()}/signin`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._createdHeaders(),
      body: JSON.stringify({ password, email }),
    })
      .then(this._checkResponse)
  };

  checkToken() {
    return fetch(`${this._baseUrl()}/users/me`, {
      method: 'GET',
      credentials: this._credentials,
      headers: this._createdHeaders(),
    })
      .then(this._checkResponse);
  };

  deleteToken() {
    return fetch(`${this._baseUrl()}/signout`, {
      method: 'POST',
      credentials: this._credentials,
      headers: this._createdHeaders(),
    })
      .then(this._checkResponse);
  };

  editUserInfo(name, email) {
    return fetch(`${this._baseUrl()}/users/me`, {
      method: 'PATCH',
      credentials: this._credentials,
      headers: this._createdHeaders(),
      body: JSON.stringify({ name, email }),
    })
      .then(this._checkResponse)
  };

  // getCards() {
  //   return fetch(`${this._baseUrl()}/cards`, {
  //     method: 'GET',
  //     credentials: this._credentials,
  //     headers: this._createdHeaders(),
  //   })
  //     .then(this._checkResponse)
  // };

  // addCard(name, link) {
  //   return fetch(`${this._baseUrl()}/cards`, {
  //     method: 'POST',
  //     credentials: this._credentials,
  //     headers: this._createdHeaders(),
  //     body: JSON.stringify({ name, link }),
  //   })
  //     .then(this._checkResponse)
  // };

  // deleteCard(id) {
  //   return fetch(`${this._baseUrl()}/cards/${id}`, {
  //     method: 'DELETE',
  //     credentials: this._credentials,
  //     headers: this._createdHeaders(),
  //   })
  //     .then(this._checkResponse)
  // };

  // addLike(id) {
  //   return fetch(`${this._baseUrl()}/cards/${id}/likes`, {
  //     method: 'PUT',
  //     credentials: this._credentials,
  //     headers: this._createdHeaders()
  //   })
  //     .then(this._checkResponse)
  // };

  // deleteLike(id) {
  //   return fetch(`${this._baseUrl()}/cards/${id}/likes`, {
  //     method: 'DELETE',
  //     credentials: this._credentials,
  //     headers: this._createdHeaders()
  //   })
  //     .then(this._checkResponse)
  // };

  // editAvatar(avatar) {
  //   return fetch(`${this._baseUrl()}/users/me/avatar`, {
  //     method: 'PATCH',
  //     credentials: this._credentials,
  //     headers: this._createdHeaders(),
  //     body: JSON.stringify({ avatar }),
  //   })
  //     .then(this._checkResponse)
  // };
}

export default MainApi;