var section_hotels_body_detail = new ReacetiveComponent();

section_hotels_body_detail.exportShape = function (data) {
    return `
        <div class="article-hotels-body-detail">
            ${data.content}
        </div>
    `;
};
