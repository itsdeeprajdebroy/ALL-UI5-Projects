sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.pp.routinglearning.controller.View1", {
        onInit() {
            // debugger;
        },

        goToNextPage: function() {
            this.getOwnerComponent().getRouter().navTo("RouteView2");
        }
    });
});