var footer_phones_branches = new ReacetiveComponent();

footer_phones_branches.exportBuilder = function (data) {
    return `
        <li>${data.city} <span> ${data.phone}</span></li>
    `;
};
