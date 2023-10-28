var section_assistance = new ReacetiveComponent();
section_assistance.exportShape = function (data) {
    return `
            <section class="section-standard section-assistance">
                <article class="article-assistance">
                    <div class="article-assistance-entrance">
                        <img
                            src="./resources/images/section-assistance/assistance.jpg"
                            class="article-assistance-entrance-img"
                        />
                    </div>

                    <section_assistance_creditcard
                        reactive
                    ></section_assistance_creditcard>
                    <div class="article-assistance-entrance">
                        <iframe style="align-self='center'" width="1257" height="707" src="https://www.youtube.com/embed/BMj2II6SUBY" title="Europ Assistance - Te cuidamos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div class="article-assistance-services">
                        <section_assistance_services_item
                            reactive
                            url_api="./apis_json/assitance_bronze_plan.json"
                            use_data_api="true"
                        ></section_assistance_services_item>

                        <section_assistance_services_item
                            reactive
                            url_api="./apis_json/assitance_silver_plan.json"
                            use_data_api="true"
                        ></section_assistance_services_item>

                        <section_assistance_services_item
                            reactive
                            url_api="./apis_json/assitance_gold_plan.json"
                            use_data_api="true"
                        ></section_assistance_services_item>
                    </div>

                    <section_assistance_world_map
                        reactive
                    ></section_assistance_world_map>
                </article>
            </section>
    `;
};
