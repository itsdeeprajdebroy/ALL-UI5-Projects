sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ro/application/bindingswithexample/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("sap.ro.application.bindingswithexample.Component", {
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

            models.createDataModel().then((oDataModel) => {
                this.setModel(oDataModel, "UserModel")
            })

            // enable routing
            this.getRouter().initialize();
        }
    });
});