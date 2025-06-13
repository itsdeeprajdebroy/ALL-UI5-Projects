sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.ro.application.bindingswithexample.controller.Users", {
        onInit() {
            
        },
        onClickNext: function(oEvent) {
            const sId = oEvent.getSource().getBindingContext("UserModel").sPath.split("").pop();
            this.getOwnerComponent().getRouter().navTo("Rough", {
                id: sId
            })
        }
    });
});