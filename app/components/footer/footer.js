var footer = new ReacetiveComponent();

footer.exportShape = function (data) {
    return `
  
    <!--footer-->
    <footer id="footer">
        <div class="footer-header">
            <a href="#"
                ><img
                    class="footer-header-go-up-button"
                    src="./resources/images/footer/footer-button-up.png"
                />
            </a>
        </div>
        <div class="footer-body">
            <address class="footer-widget-1">
                <div class="footer-widget-tittle">
                    Paises donde encontraras nuestras sucursales.
                </div>
                <span
                    class="material-symbols-outlined footer-widget-list-material-symbols"
                >
                    globe_asia
                </span>
                <ul class="footer-widget-branch-list">
                <footer_our_branches
                reactive
                iteration="max"
                build_by_api_herency=true
                >
                </footer_our_branches> 
                </ul>
            </address>

            <address class="footer-widget-2">
                <div class="footer-widget-tittle">
                    Contactate con nosotros:
                </div>
                <span
                    class="material-symbols-outlined footer-widget-list-material-symbols"
                >
                    perm_phone_msg
                </span>
                <ul class="footer-widget-contact-list">
                
                <footer_phones_branches
                reactive
                iteration="max"
                build_by_api_herency=true
                >
                </footer_phones_branches>
                </ul>
            </address>

            <address class="footer-widget-3">
                <div class="footer-widget-tittle">
                    Nuestros sitios mas importantes:
                </div>
                <span
                    class="material-symbols-outlined footer-widget-list-material-symbols"
                >
                    language
                </span>

                <ul class="footer-widget-web-link">
                    <footer_sites_branches
                    reactive
                    iteration="max"
                    build_by_api_herency=true
                    >
                    </footer_sites_branches>
                </ul>
            </address>
        </div>
        <div class="footer-footer"></div>
        
    </footer>
    `;
};
