var footer_our_branches = new ReacetiveComponent();

footer_our_branches.exportBuilder = function (data) {
    return `
      <li>
          Sucursal "${data.city}" <span>${data.country}</span>
      </li>
    `;
};
