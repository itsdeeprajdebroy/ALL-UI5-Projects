sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/raj/routingwithid/model/models",
    "sap/raj/routingwithid/model/data"
], (UIComponent, models, data) => {
    "use strict";

    return UIComponent.extend("sap.raj.routingwithid.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            //default model
            this.setModel(data.createDataModel());
            
            // enable routing
            this.getRouter().initialize();
        }
    });
});