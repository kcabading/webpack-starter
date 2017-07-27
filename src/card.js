'use strict';

const createAndAppendCard = (header, body) => {    
    const cardElement = document.createElement("div");    
    // add html
    cardElement.innerHTML = `
        <div class="card">
            <h2 class="card-header">${header}</h2>
            <div class="card-body">${body}</div>
        </div>
    `;    
    // cardFragment.appendChild(cardElement);
    document.body.appendChild(cardElement);
}

export default createAndAppendCard;