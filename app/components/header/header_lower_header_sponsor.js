var header_lower_header_sponsor = new ReacetiveComponent();

header_lower_header_sponsor.createResource = function () {
    return [
        "./resources/images/header_section/middle-header-logo1.svg",
        "./resources/images/header_section/middle-header-logo2.svg",
        "./resources/images/header_section/middle-header-logo3.svg",
        "./resources/images/header_section/middle-header-logo4.svg",
        "./resources/images/header_section/middle-header-logo5.svg",
        "./resources/images/header_section/middle-header-logo6.svg",
    ];
};

header_lower_header_sponsor.exportBuilder = function (data) {
    return `
            <img
                class="lower-header-sponsor"
                src="${data}"
            />
       
    `;
};
