var section_hotels_body_information = new ReacetiveComponent();

section_hotels_body_information.exportShape = function (data) {
    return `
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
                        ${data.stars}star star star star star
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
    `;
};
