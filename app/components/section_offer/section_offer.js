var section_offer = new ReacetiveComponent();
section_offer.exportShape = function (data) {
    return `
    <!--section-offer-->
    <script src="saludo.js"></script>
    <section class="section-standard">
        <article class="article-ticket-offer">

            <!--article header----------------------------------------------------------------------------------------->
            <section_offer_header reactive > </section_offer_header>
            <!--END ###############################################################################################---->

            <!--article body----------------------------------------------------------------------------------------->
            <div class="article-ticket-offer-body draggable">
                <section_offer_card
                    reactive
                    iteration=max
                    url_api="./apis_json/section_offer_card.json"
                    build_by_api=true
                ></section_offer_card>
            </div>
            <!--END ###############################################################################################---->

            <!--article footer-->
            <section_offer_footer reactive> </section_offer_footer>
            <!--END ###############################################################################################---->
        </article>
    </section>
    `;
};
