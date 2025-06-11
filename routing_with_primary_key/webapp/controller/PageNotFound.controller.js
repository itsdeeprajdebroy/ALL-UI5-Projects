sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.rr.routingwithprimarykey.controller.PageNotFound", {
        onInit() {
        },

        onNavBack: function() {
            this.getOwnerComponent().getRouter().navTo("RouteView1", {

            })
        }
    });
});