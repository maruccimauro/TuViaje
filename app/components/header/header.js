var header = new ReacetiveComponent();
header.exportShape = function (data) {
    return `
    <!--header-->
            <header id="header">
                <div id="upper-header">
                    <div id="upper-header-logo">
                        <h1 class="header-logo-text">Tu VIAJE.com</h1>
                    </div>
                    <nav id="upper-header-navbar">
                        <header_lower_header_sponsor_item
                            reactive
                            iteration="max"
                            build_by_resource="true"
                        ></header_lower_header_sponsor_item>
                    </nav>
                    <div id="upper-header-login">
                        <a
                            class="nav-item-anchor"
                            href="https://login-tu-viaje.com"
                            target="_blank"
                        >
                            <span class="material-symbols-outlined">
                                passkey
                            </span>
                            <div class="nav-item-text">Login</div>
                        </a>
                        <a
                            class="nav-item-anchor"
                            href="https://search-tu-viaje.com"
                            target="_blank"
                        >
                            <span class="material-symbols-outlined">
                                search
                            </span>
                            <div class="nav-item-text">Buscar</div>
                        </a>
                    </div>
                </div>
                <div id="middle-header">
                    <div class="middle-header-effect">
                        <p>El viaje de tus sueños ...</p>
                        <p>no tiene que vivir solo en tus sueños.</p>
                        <div class="middle-header-search">
                            <a
                                href="https://www.busqueda-tu-viaje.com"
                                target="blank"
                                ><span class="material-symbols-outlined">
                                    frame_inspect
                                </span>
                            </a>
                            <input class="middle-header-search-input" />
                        </div>
                    </div>
                </div>
                <div id="lower-header">
                    <header_lower_header_sponsor
                        reactive
                        iteration="max"
                        build_by_resource="true"
                    ></header_lower_header_sponsor>
                </div>
            </header>
    `;
};
