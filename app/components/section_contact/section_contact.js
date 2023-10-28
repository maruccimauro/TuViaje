var section_contact = new ReacetiveComponent();

section_contact.componentDidCreate = function () {
    let checkContactForm = {
        fields: [
            {
                messageField: "nombre",
                idField: "firstname",
                checkMethods: {
                    min: 3,
                    max: 25,
                    isString: true,
                    isRequired: true,
                },
            },
            {
                messageField: "apellido",
                idField: "lastname",
                checkMethods: {
                    min: 3,
                    max: 25,
                    isString: true,
                    isRequired: true,
                },
            },
            {
                messageField: "email",
                idField: "email",
                checkMethods: {
                    min: 3,
                    max: 50,
                    isEmail: true,
                    isRequired: true,
                },
            },
            {
                messageField: "telefono",
                idField: "phone",
                checkMethods: {
                    min: 3,
                    max: 25,
                    isPhone: true,
                    isRequired: true,
                },
            },
            {
                messageField: "mensaje",
                idField: "message",
                checkMethods: {
                    min: 10,
                    max: 500,
                    isRequired: true,
                },
            },
        ],
        errorMsgs: [],
        modalElement: "error_modal",
        modalContentElement: "error_modal_msg",
        formElement: "contact_form",
        run(event) {
            event.preventDefault();
            this.dropErrors();
            this.fields.forEach((element) => {
                Object.keys(element.checkMethods).forEach((methodKey) => {
                    let node = document.getElementById(element.idField);
                    this[methodKey](element, node);
                });
            });
            if (this.HasError()) {
                this.showModal();
                this.generateHtmlListNode();
                this.addListenerModalClose();
            } else {
                window.location.href = "./index.html";
            }
        },

        min(element, node) {
            if (node.value.length < element.checkMethods.min) {
                this.errorMsgs.push(
                    `El campo ${element.messageField} debe tener como minimo ${element.checkMethods.min} caracteres.`
                );
            }
        },

        max(element, node) {
            if (node.value.length > element.checkMethods.max) {
                this.errorMsgs.push(
                    `El campo ${element.messageField} debe tener como maximo ${element.checkMethods.max} caracteres.`
                );
            }
        },

        isRequired(element, node) {
            if (node.value.length == 0) {
                this.errorMsgs.push(
                    `El campo ${element.messageField} es requerido.`
                );
            }
        },

        isString(element, node) {
            const regularExpression = /^[a-zA-Z\s]*$/;
            if (!regularExpression.test(node.value)) {
                this.errorMsgs.push(
                    `Debes ingresar un valor valido para ${element.messageField}`
                );
            }
        },

        isNumeric(element, node) {
            const regularExpression = /^[0-9]+$/;
            if (!regularExpression.test(node.value)) {
                this.errorMsgs.push(
                    `Debes ingresar un valor valido para el campo ${element.messageField}`
                );
            }
        },

        isEmail(element, node) {
            const regularExpression =
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            if (!regularExpression.test(node.value)) {
                this.errorMsgs.push(
                    `Debes ingresar un valor de email valido para el campo ${element.messageField}`
                );
            }
        },
        isPhone(element, node) {
            const regularExpression = /^[+\d() -]+$/;

            if (!regularExpression.test(node.value)) {
                this.errorMsgs.push(
                    `Debes ingresar un valor de telefono valido para el campo ${element.messageField}`
                );
            }
        },

        getErrors() {
            return this.errorMsgs;
        },

        dropErrors() {
            this.errorMsgs = [];
        },

        HasError() {
            return this.errorMsgs.length > 0;
        },

        generateHtmlListNode() {
            let htmlErrorListItems = "";
            this.errorMsgs.forEach((errorMsg) => {
                htmlErrorListItems += "<li>" + errorMsg + "</li>\n";
            });
            console.log(this.errorMsgs);
            document.getElementById(this.modalContentElement).innerHTML = `
            <ul>    
                    ${htmlErrorListItems}
            <ul>
            `;
        },

        addListenerModalClose() {
            document
                .getElementById(this.modalElement)
                .addEventListener("click", () => {
                    document.getElementById(this.modalElement).style.display =
                        "none";
                });
        },
        addListenerSubmitForm() {
            document
                .getElementById("contact_form")
                .querySelector('[type="submit"]')
                .addEventListener("click", (event) => {
                    checkContactForm.run(event);
                });
        },
        showModal() {
            document.getElementById(this.modalElement).style.display = "block";
        },
    };

    checkContactForm.addListenerSubmitForm();
};

section_contact.exportShape = function (data) {
    return `
        <section class="section-standard section-contact">
            <div id="error_modal" class="modal">
                <div id="error_modal_msg" class="modal-content"></div>
            </div>
            <article class="article-contact">
                <div class="article-contact-entrance">
                    <div class="article-contact-entrance-form-container">
                        <form
                            id="contact_form"
                            class="article-contact-entrance-form"
                        >
                            <h1
                                class="article-contact-entrance-form-tittle"
                            >
                                NOS PONDREMOS EN CONTACTO A LA BREVEDAD
                            </h1>
                            <div class="article-contact-entrance-form-item">
                                <label for="firstname"></label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    placeholder="Nombre"
                                />
                                <label for="lastname"></label>
                                <input
                                    name="lastname"
                                    id="lastname"
                                    placeholder="Apellido"
                                />
                            </div>
                            <div class="article-contact-entrance-form-item">
                                <label for="nombre"></label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                />
                                <label for="phone"></label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Telefono"
                                />
                            </div>

                            <div class="article-contact-entrance-form-item">
                                <label for="message"></label>
                                <textarea
                                    class="article-contact-entrance-form-item-message"
                                    name="message"
                                    id="message"
                                    placeholder="Mensaje"
                                ></textarea>
                            </div>
                            <div class="article-contact-entrance-form-item">
                                <label for="submit"></label>
                                <input
                                    class="article-contact-entrance-form-item-submit"
                                    type="submit"
                                    name="submit"
                                    id="submit"
                                    value="Enviar"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="article-contact-entrance-container-img">
                        <img
                            class="article-contact-entrance-img"
                            src="./resources/images/section-contact/pointer1.png"
                        />
                    </div>
                </div>
            </article>
        </section> 
    `;
};
