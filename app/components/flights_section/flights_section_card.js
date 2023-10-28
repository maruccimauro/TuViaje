/************
 * -COMPONENT- flights_section_card
 * **********/
/************
 * Pseudo-Module section
 * **********/

var flights_section_card = new ReacetiveComponent();

flights_section_card.exportBuilder = function (data) {
    return `
            <div class="article-flights-body-card">
            <div
                class="article-flights-body-card-container-img"
            >
                <img
                    class="article-flights-body-card-img"
                    src="${data.image}"
                />
            </div>
            <div
                class="article-flights-body-card-information"
            >
                <div class="article-flights-body-card-date">
                    Proximo vuelo el ${new Date(
                        new Date().setDate(
                            new Date().getDate() + data.nextFlight
                        )
                    ).toLocaleString("es-ES", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    })}
                </div>
                <div
                    class="article-flights-body-card-country"
                >
                    ${data.country}
                </div>
                <div class="article-flights-body-card-city">
                    ${data.city}
                </div>
            </div>
            <div
                class="article-flights-body-card-description"
            >
                ${data.content}
            </div>

            <a href="https://www.contratar-plan-tu-viaje.com" target="blank">
                <div
                    class="article-flights-body-card-readmore"
                >
                    CONTRATAR
                </div>
            </a>
        </div>
    `;
};
