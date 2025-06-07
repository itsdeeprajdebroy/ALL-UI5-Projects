sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.raj.routingwithid.controller.View1", {
        onInit() {
            
        },

        onClickItem: function(oEvent) {
            var sId = oEvent.getSource().getBindingContext().getProperty().ProductID;
            // var sId = oEvent.getSource().getBindingContext().sPath.split("/").pop();
            this.getOwnerComponent().getRouter().navTo("RouteView2", {
                productId: sId
            });
        }
    });
});