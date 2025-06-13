sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.ro.application.bindingswithexample.controller.Rough", {
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("Rough").attachMatched(this._onPatternMatch, this)
        },

        _onPatternMatch: function(oEvent) {
            const sId = oEvent.getParameter("arguments").id

            const sPath = '/' + sId + '/'
            
            this.getView().bindElement({
                path: sPath,
                model: 'UserModel'
            })
        }
    });
});