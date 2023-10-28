var section_offer_card = new ReacetiveComponent();

section_offer_card.exportBuilder = function (data) {
    return `
      <div class="article-ticket-offer-body-card" style="background-image: url('${data.image}')">
        <div class="article-ticket-offer-offert">-${data.discount}% OFF</div>
        <a class="article-ticket-offer-body-anchor" href="https://www.comprar-oferta-tu-viaje.com" target="_blank" ">
          <div class="article-ticket-offer-body-country">${data.country}</div>
          <div class="article-ticket-offer-body-city">${data.city}</div>
        </a>
      </div>
    `;
};
