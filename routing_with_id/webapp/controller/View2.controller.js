sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.raj.routingwithid.controller.View2", {
        onInit() {
            this.getOwnerComponent().getRouter().getRoute("RouteView2").attachMatched(this._onPatternMatch, this);
            
        },

        _onPatternMatch: function(oEvent) {
            const sId = oEvent.getParameter("arguments").productId;
            if(sId !== undefined){
                // const sPath = '/value/' + sId;
                const sPath = "/d/results/" + sId;
                this.getView().bindElement({
                    path: sPath
                })

            }
        }
    });
});