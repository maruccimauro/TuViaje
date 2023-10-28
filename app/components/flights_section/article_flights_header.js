var article_flights_header = new ReacetiveComponent();

article_flights_header.exportShape = function (data) {
    return `
  <div class="article-standard-header article-flights-header">
                        <h3 class="article-standard-tittle">
                            Los mejoes vuelvos a los mejores precios , vivi la
                            temporada, vivi tus sueños.
                        </h3>
                        <p class="article-standard-descripction">
                            No esperes mas por lo que quieres , hoy puedes volar
                            a donde quieras con nuestro catalogo de destinos.
                            <span class="material-symbols-outlined"
                                >local_activity</span
                            >
                        </p>
                        <img
                            class="article-flights-body-img-decoration"
                            src="./resources/images/section-flights/section-ticket-decoration.png"
                        />
                    </div>`;
};
