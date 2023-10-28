var section_hotels_body_image = new ReacetiveComponent();

section_hotels_body_image.exportShape = function (data) {
    return `
        <div class="article-hotels-body-image-container">
            <div class="article-hotels-body-image-alternative">
                <img
                    galery-hotel-item
                    src="./resources/images/section-flights/section-flights0.jpeg"
                    class="article-hotels-body-image-alternative-item galery-hotel-item"
                />
                <img
                    galery-hotel-item
                    src="./resources/images/section-flights/section-flights1.jpeg"
                    class="article-hotels-body-image-alternative-item galery-hotel-item"
                />
                <img
                    galery-hotel-item
                    src="./resources/images/section-flights/section-flights2.jpeg"
                    class="article-hotels-body-image-alternative-item galery-hotel-item"
                />
            </div>
            <img
                galery-hotel-view
                src="./resources/images/section-hotels/hotel1.jpg"
                class="article-hotels-body-image galery-hotel-view galery-hotel-view"
            />
        </div>
    `;
};
