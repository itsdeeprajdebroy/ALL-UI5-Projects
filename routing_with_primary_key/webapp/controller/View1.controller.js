sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.rr.routingwithprimarykey.controller.View1", {
        onInit() {
        },

        onClickItem: function(oEvent) {
            const productId = oEvent.getSource().getBindingContext().getProperty().ProductID;
            this.getOwnerComponent().getRouter().navTo("Products", {
                productID: productId
            });
        }
    });
});