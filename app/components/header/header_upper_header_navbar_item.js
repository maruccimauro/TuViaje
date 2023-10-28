var header_lower_header_sponsor_item = new ReacetiveComponent();

header_lower_header_sponsor_item.createResource = function () {
    return [
        {
            item: "Inicio",
            span: "home",
            url: "./index.html",
        },
        {
            item: "Vuelos",
            span: "airplane_ticket",
            url: "./vuelos.html",
        },
        {
            item: "Hoteles",
            span: "concierge",
            url: "./hoteles.html",
        },
        {
            item: "Asistencia",
            span: "ecg_heart",
            url: "./asistencia.html",
        },
        {
            item: "Contacto",
            span: "connect_without_contact",
            url: "./contacto.html",
        },
        {
            item: "Sucursales",
            span: "globe",
            url: "#footer",
        },
    ];
};

header_lower_header_sponsor_item.exportBuilder = function (data) {
    return `
        <a class="nav-item-anchor" href="${data.url}">
            <span class="material-symbols-outlined">
            ${data.span}
            </span>
            <div class="nav-item-text">${data.item}</div>
        </a>
       
    `;
};
