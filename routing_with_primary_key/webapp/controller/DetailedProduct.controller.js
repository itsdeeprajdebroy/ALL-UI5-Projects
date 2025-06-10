sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], (Controller, JSONModel) => {
    "use strict";
  
    return Controller.extend("sap.rr.routingwithprimarykey.controller.DetailedProduct", {
        onInit() {
          this.getOwnerComponent().getRouter().getRoute("detail").attachMatched(this._onPatternMatch, this)

          const oDataTabModel = new JSONModel({
            "selectedTabKey": "overview"
          })
          this.getView().setModel(oDataTabModel, "Datatabselect")
        },

        _onPatternMatch: function(oEvent) {
          const sId = oEvent.getParameter("arguments")?.productID;
          const sQuery = oEvent.getParameter("arguments")["?query"];

          const sPath = '/Products(' + sId + ')'
          this.getView().bindElement({
              path: sPath
          })

          if(sQuery !== undefined){
            this.getView().getModel("Datatabselect").setProperty("/selectedTabKey", sQuery?.tab);
          }else{
            this.getOwnerComponent().getRouter().navTo("detail", {
              productID: sId,
              "?query": {
                tab: "overview"
              }
          })
          }
        },

        onTabSelect: function(oEvent) {
          const key = oEvent.getParameter("key");
          
          const productID = this.getView().getBindingContext().getProperty()?.ProductID;
          
          this.getOwnerComponent().getRouter().navTo("detail", {
            productID: productID,
            "?query": {
              tab: key
            }
        })
        }
    });
  });