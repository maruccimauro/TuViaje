var flights_section_for_index = new ReacetiveComponent();

flights_section_for_index.exportShape = function (data) {
    return `
            <!--Flights-Section-->
            <section class="section-standard">
                <article class="article-flights">
                    <!--article header----------------------------------------------------------------------------------------->
                    <article_flights_header reactive></article_flights_header>
                    <!--END ###############################################################################################---->

                    <!--article body------------------------------------------------------------------------------------------>
                    <div class="article-flights-body">
                        <div class="article-flights-body-galery">
                            <flights_section_card
                            reactive
                            iteration="8"
                                url_api="./apis_json/flights_section_card.json"
                                build_by_api="true"
                            ></flights_section_card>
                        </div>
                    </div>
                    <!--END ###############################################################################################---->

                    <!--article footer-->
                    <!--the article footer is not necessary-->
                    <!-- END ###############################################################################################---->
                </article>
            </section>
    `;
};
