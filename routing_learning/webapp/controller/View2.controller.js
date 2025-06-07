sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, oHistory) => {
    "use strict";

    return Controller.extend("sap.pp.routinglearning.controller.View2", {
        onInit() {
        },

        goToPrevPage: function() {
            if(oHistory.getInstance().getPreviousHash()) {
                window.history.go(-1);
            }
            else{
                this.getOwnerComponent().getRouter().navTo("RouteView1");
            }
        }
    });
});