const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.places__list');

function createCard(data, removeCard) {
    const { name, link } = data;
    const card = cardTemplate.querySelector('.card').cloneNode(true);

    card.querySelector('.card__image').src = link;
    card.querySelector('.card__image').alt = `Изображение ${name}`;
    card.querySelector('.card__title').textContent = name;

    card.querySelector('.card__delete-button').addEventListener('click', removeCard);

    return card;
}

function removeCard(e) {
    const cardContainer = e.target.closest('.card');

    cardContainer.remove();
}

function renderCard(card) {
    cardList.append(card);
}

initialCards.forEach((item) => {
    const card = createCard(item, removeCard);

    renderCard(card);
});
