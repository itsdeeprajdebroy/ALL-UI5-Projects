sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.rr.routingwithprimarykey.controller.Products", {
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("Products").attachMatched(this._onPatternMatch, this)
        },

        _onPatternMatch: function(oEvent) {
            const sId = oEvent.getParameter("arguments").productID;

            const sPath = '/Products(' + sId + ')'
            this.getView().bindElement({
                path: sPath
            })
        }
    });
});