var section_assistance_services_item = new ReacetiveComponent();

section_assistance_services_item.exportShape = function (data) {
    data = data.api;
    return `
        <div class="article-assistance-services-item">
            <div class="article-assistance-services-tittle">
                ${data.name}
            </div>
            <div class="article-assistance-services-summary">
                ${data.summary}
            </div>
            <a
                class="article-assistance-services-medal-anchor"
                href="https://www.solicitar-plan-${data.name}.com"
                target="_blank"
                ><img
                    src="${data.medalImage}"
                    class="article-assistance-services-medal"
            /></a>
            <div class="article-assistance-services-list">
                <ul>
                    <li>${data.time}</li>
                    <li>${data.range}</li>
                    <li>${data.queries}</li>
                    <li>${data.internation}</li>
                    <li>${data.reinstatament}</li>
                    <li>${data.medicaments}</li>
                    <li>${data.zone}</li>
                </ul>
            </div>
        </div>
    `;
};
