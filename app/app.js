var appStandard = {
    prefixComponentWarn: "Js Reactor Tags say [WARM] : ",
    prefixAppWarn: "Js Reactor Tags say [WARM] : ",
};

/************
 * App section
 * **********/

class App {
    context = [];
    counterUI = 0;

    constructor() {
        this.ui = 0;
        this.Herency = { api: [] };
    }
    issetComponent(componentName) {
        if (componentName in window) {
            return true;
        } else {
            this.sendWarn(
                `no se ha encontrado el ambito de ejecucion del componente : ${componentName}()`
            );
        }
    }

    createUI() {
        let prefix = "UI";
        return prefix + Date.now() + this.counterUI;
    }

    issetContext(contextName) {
        if (!(contextName in app.context)) {
            app.sendWarn(`El contexto ${contextName} no existe.`);
        } else {
            return true;
        }
    }

    createContext(contextName, contentContext) {
        this.context[contextName] = contentContext;
    }

    getContext(contextName) {
        if (this.issetContext(contextName)) return this.context[contextName];
    }

    appConsole(cadena) {
        let prefix = "Js Reactor Tags App() say: ";
        console.log(prefix);
        console.log(cadena);
    }
    sendWarn(message) {
        let prefix = appStandard.prefixAppWarn;
        console.warn(`${prefix} \n  [app()] : ${message}`);
    }

    assignUI(node) {
        this.ui++;
        return this.ui;
    }

    isReactive(addedElement) {
        return addedElement.hasAttribute("reactive");
    }

    run() {
        this.observer.observe(document, {
            childList: true,
            subtree: true,
        });

        document.addEventListener("elementMounted", (event) => {
            const mountedElement = event.target;
        });
    }

    triggerElementMountedEvent(element) {
        const event = new Event("elementMounted", {
            bubbles: true,
        });
        element.dispatchEvent(event);
    }

    observer = new MutationObserver((mutationsList) => {
        mutationsList.forEach((mutation) => {
            if (mutation.type === "childList") {
                if (mutation.addedNodes.length > 0) {
                    let addedElement = mutation.addedNodes[0];

                    if (addedElement.nodeType === Node.ELEMENT_NODE) {
                        if (!this.isReactive(addedElement)) return;

                        let componentName = addedElement.tagName.toLowerCase();
                        if (this.issetComponent(componentName)) {
                            window[componentName].export(addedElement);
                        }

                        this.triggerElementMountedEvent(addedElement);
                    }
                }
            }
        });
    });
}

var app = new App();
app.run();

/************
 * ClassComponent section
 * **********/
class ReacetiveComponent {
    constructor() {}

    createContext(contextName, contentContext) {
        app.createContext(contextName, contentContext);
    }

    export(node) {
        //! SUMAMENTE IMPORTANTE DESTRUIR EL NUCLEO REACTIVO ¡ (evita entrar en un bucle infinito)

        node.removeAttribute("reactive");
        new ConstructorComponent(this, node);
    }
}

/************
 * ConstructorComponent section
 * **********/
class ConstructorComponent {
    getObjPropsByTagProps() {}

    sendWarn(message) {
        let prefix = this.node.tagName.toLocaleLowerCase();

        console.warn(
            `${appStandard.prefixComponentWarn} \n  [${prefix}] : ${message}`
        );
    }

    hasMethod(method) {
        return typeof method === "function";
    }

    resolveIntercerptComponentStatus(status) {
        if (this.hasMethod(status)) {
            status(this);
        } else {
        }
    }

    CreateObjectPropFromNode(prop) {
        this[prop] = this.node.hasAttribute(prop)
            ? this.node.getAttribute(prop)
            : false;
    }

    getNodeProp(node, prop) {
        return node.hasAttribute(prop) ? node.getAttribute(prop) : false;
    }

    setNodeProp(node, prop, value) {
        node.setAttribute(prop, value);
    }

    constructor(component, node) {
        if (node.isRootNode) {
            node.setAttribute("unique_identifier", app.assignUI());
        }
        this.tagName = node.tagName.toLocaleLowerCase();
        this.node = node;
        this.component = component;

        this.CreateObjectPropFromNode("ui_herency");
        this.CreateObjectPropFromNode("build_by_api_herency");
        this.CreateObjectPropFromNode("url_api");
        this.CreateObjectPropFromNode("header_api");
        this.CreateObjectPropFromNode("build_by_api");
        this.CreateObjectPropFromNode("build_by_resource");
        this.CreateObjectPropFromNode("build_by_context");
        this.CreateObjectPropFromNode("use_data_api");
        this.CreateObjectPropFromNode("use_data_resource");
        this.CreateObjectPropFromNode("use_data_context");
        this.CreateObjectPropFromNode("iteration");
        this.CreateObjectPropFromNode("fixed_use_data");
        if (this.iteration == 0 && this.iteration != "max") this.iteration = 1;

        this.assemble();
    }

    async build() {
        this.createNodes();
    }

    assemble() {
        this.build();
    }

    async createNodes() {
        let dataConstructor = [];
        let iteration = 0;
        let isTypeBuilder = false;

        this.resolveIntercerptComponentStatus(
            this.component.componentWillCalculationData
        );
        let numberBuilderTags = this.resolveIssetBuilderTags();
        if (numberBuilderTags) {
            isTypeBuilder = true;

            if (!this.IssetBuilderTagsIncompatible(numberBuilderTags)) {
                dataConstructor = await this.resolveGetDataBuilder();

                if (dataConstructor.length > 0) {
                    if (this.iteration == "max") {
                        iteration = dataConstructor.length;
                    } else {
                        iteration = Math.min(
                            dataConstructor.length,
                            this.iteration
                        );
                    }
                }
            }
        } else {
            dataConstructor[0] = await this.resolveGetDataShape();
            if (this.iteration == "max") {
                iteration = 1;
            } else {
                iteration = Math.max(1, this.iteration);
            }
        }

        this.resolveIntercerptComponentStatus(
            this.component.componentDidCalculationData
        );

        this.resolveIntercerptComponentStatus(
            this.component.componentWillCreate
        );
        for (let i = 0; i < iteration; i++) {
            let html = "";

            if (!isTypeBuilder && !this.fixed_use_data) {
                dataConstructor[0] = await this.resolveGetDataShape();
            }

            if (isTypeBuilder) {
                if (this.hasMethod(this.component.exportBuilder)) {
                    html = this.component.exportBuilder(dataConstructor[i]);
                } else {
                    this.sendWarn(
                        "no se ha encontrado el metodo exportBuilder()"
                    );
                }
            } else {
                if (this.hasMethod(this.component.exportShape)) {
                    html = this.component.exportShape(dataConstructor[0]);
                } else {
                    console.log(this.tagName);
                    console.log(this.component);
                    this.sendWarn(
                        "no se ha encontrado el metodo exportShape()"
                    );
                }
            }

            this.resolveIntercerptComponentStatus(
                this.component.componentWillMount
            );

            this.node.insertAdjacentHTML("beforebegin", html);

            this.resolveIntercerptComponentStatus(
                this.component.componentDidMount
            );

            this.resolveIntercerptComponentStatus(
                this.component.componentWillCreateAllReactiveChilds
            );
            let recursiveChildren = [];
            recursiveChildren =
                this.node.parentElement.querySelectorAll("[reactive]");

            recursiveChildren.forEach((child) => {
                if (this.getNodeProp(child, "build_by_api_herency")) {
                    this.resolveIntercerptComponentStatus(
                        this.component.componentWillCreateReactiveChild
                    );

                    let unique_identifier = app.createUI();

                    app.createContext(
                        unique_identifier,
                        isTypeBuilder ? dataConstructor : dataConstructor[0].api
                    );

                    this.setNodeProp(child, "ui_herency", unique_identifier);
                }

                window[child.tagName.toLocaleLowerCase()].export(child);
                this.resolveIntercerptComponentStatus(
                    this.component.componentDidCreateReactiveChild
                );
            });
            this.resolveIntercerptComponentStatus(
                this.component.componentDidCreateAllReactiveChilds
            );
        }

        this.node.style.display = "none";
        this.resolveIntercerptComponentStatus(
            this.component.componentDidCreate
        );
    }

    /*****>>>>>>BEGIN    ****RESOLVE INCOPATIBILITY SECTION************* */

    resolveIssetBuilderTags() {
        const attributesIncompatible = [
            "build_by_context",
            "build_by_resource",
            "build_by_api",
            "build_by_api_herency",
        ];
        let issetBuilderTags = 0;

        attributesIncompatible.forEach((attribute) => {
            if (this.node.hasAttribute(attribute)) issetBuilderTags++;
        });

        return issetBuilderTags;
    }

    IssetBuilderTagsIncompatible(numberBuilderTags) {
        if (numberBuilderTags > 1) {
            app.sendWarn(
                `Existen propiedades incopatibles del tipo constructor en el mismo componente "${this.tagName}"`
            );
        }
    }

    /*****    END    ****RESOLVE GET DATA SECTION ################/

    /*****>>>>>>BEGIN    ****RESOLVE GET DATA SECTION************* */

    async resolveGetDataShape() {
        let dataConstructor = [];

        if (this.use_data_api) {
            dataConstructor = { api: await this.resolveGetDataBuilderApi() };
        }
        if (this.use_data_context) {
            dataConstructor = { context: this.resolveGetDataUseContext() };
        }

        if (this.use_data_resource) {
            dataConstructor = {
                resource: this.resolveGetDataBuilderResource(),
            };
        }

        if (this.build_by_api_herency) {
            dataConstructor = this.resolveGetDataBuilderApiHerency();
        }
        return dataConstructor;
    }

    async resolveGetDataBuilder() {
        let dataConstructor = [];

        if (this.build_by_api) {
            dataConstructor = await this.resolveGetDataBuilderApi();
        }

        if (this.build_by_context) {
            dataConstructor = this.resolveGetDataBuilderContext();
        }

        if (this.build_by_resource) {
            dataConstructor = this.resolveGetDataBuilderResource();
        }

        if (this.build_by_api_herency) {
            dataConstructor = this.resolveGetDataBuilderApiHerency();
        }

        return dataConstructor;
    }

    async resolveGetDataBuilderApi() {
        try {
            let api_data;

            const response = await fetch(this.url_api);

            if (!response.ok) {
                throw new Error(
                    `Error fetching data: ${response.status} - ${response.statusText}`
                );
            }

            const jsonData = await response.json();

            if (jsonData && Object.keys(jsonData).length > 0) {
                api_data = jsonData;
            } else {
                app.sendWarn(
                    `La respuesta está vacía o no es un JSON válido en getData() para el componente "${this.tagName}`
                );
            }

            return jsonData;
        } catch (error) {
            app.sendWarn(
                `Error al procesar la solicitud ${this.url_api} en getData(): ${error} para el componente "${this.tagName}"`
            );
        }
    }

    resolveGetDataUseContext() {
        if (app.issetContext(this.use_data_context)) {
            return app.getContext(this.use_data_context);
        }
    }

    resolveGetDataBuilderContext() {
        if (app.issetContext(this.build_by_context)) {
            return [app.getContext(this.build_by_context)];
        }
    }

    resolveGetDataBuilderResource() {
        if (typeof this.component.createResource === "function") {
            return this.component.createResource();
        }
    }

    resolveGetDataBuilderApiHerency() {
        return app.getContext(this.ui_herency);
    }
}
