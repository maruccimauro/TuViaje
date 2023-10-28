var footer_sites_branches = new ReacetiveComponent();

footer_sites_branches.exportBuilder = function (data) {
    return `
      <li>
          <a
              class="footer-widget-web-link"
              href="https://www.tuvuelo${data.city}.com"
              >www.tuvuelo${data.city}.com</a
          >
      </li>
    `;
};
