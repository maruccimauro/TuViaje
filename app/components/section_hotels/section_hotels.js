var section_hotels = new ReacetiveComponent();

section_hotels.exportBuilder = function (data) {
    let setInRange = (value) => {
        return value > 4 ? value - 4 : value;
    };

    let random = Math.floor(Math.random() * 4) + 1;

    return `
    <section class="section-standard section-hotels">
        <article class="article-hotels">
            <div class="article-hotels-body">
                <div class="article-hotels-body-image-container">
                    <div class="article-hotels-body-image-alternative">
                        <img
                            galery-hotel-item
                            src="./resources/images/section-hotels/${
                                data["image" + setInRange(1 + random)]
                            }.jpg"
                            class="article-hotels-body-image-alternative-item galery-hotel-item"
                        />
                        <img
                            galery-hotel-item
                            src="./resources/images/section-hotels/${
                                data["image" + setInRange(2 + random)]
                            }.jpg"
                            class="article-hotels-body-image-alternative-item galery-hotel-item"
                        />
                        <img
                            galery-hotel-item
                            src="./resources/images/section-hotels/${
                                data["image" + setInRange(3 + random)]
                            }.jpg"
                            class="article-hotels-body-image-alternative-item galery-hotel-item"
                        />
                    </div>
                   <img
                        galery-hotel-view
                        src="./resources/images/section-hotels/${
                            data["image" + setInRange(4 + random)]
                        }.jpg"
                        class="article-hotels-body-image galery-hotel-view galery-hotel-view"
                    />
                </div>
                <div class="article-hotels-body-information">
                    <div class="article-hotels-body-information-upper">
                        <div
                            class="article-hotels-body-information-hotels-tittle"
                        >
                            ${data.hotelName}
                        </div>
                        <div
                            class="article-hotels-body-information-stars"
                        >
                            <p>Prestigio</p>
                            <span class="material-symbols-outlined">
                                ${" star ".repeat(data.stars)}
                            </span>
                        </div>
                    </div>
                    <div class="article-hotels-body-information-lower">
                        <div
                            class="article-hotels-body-information-country"
                        >
                            ${data.country}
                        </div>
                        <div
                            class="article-hotels-body-information-city"
                        >
                            ${data.city}
                        </div>
                        <div
                            class="article-hotels-body-information-calification"
                        >
                            <span
                                class="article-hotels-body-information-calification-punctuation"
                            >
                                ${data.punctuation} Exelente</span
                            >
                            <span>(${data.opinions} opiniones)</span>
                        </div>
                    </div>
                </div>
                <div class="article-hotels-body-detail">
                    ${data.content}
                </div>
            </div>
            <a href="https://www.reservar-hotel-tu-viaje.com" target="blank" class="article-hotels-anchor">RESERVAR</a>
        </article>
        
    </section>
    `;
};
