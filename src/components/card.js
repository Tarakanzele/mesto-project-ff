const cardTemplate = document.querySelector('#card-template').content;

export async function createCard(data, removeCard, likeCard, handleCardImageClick) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const { name, link } = data;

  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt = name;
  card.querySelector('.card__title').textContent = name;

  card.querySelector('.card__image').addEventListener('click', () => {
    handleCardImageClick({ name, link });
  });

  card.querySelector('.card__like-button').addEventListener('click', likeCard);
  card.querySelector('.card__delete-button').addEventListener('click', removeCard);

  return card;
}

export function likeCard(e) {
  const btn = e.target;

  btn.classList.toggle('card__like-button_is-active');
}

export function removeCard(e) {
  const cardContainer = e.target.closest('.card');

  cardContainer.remove();
}
