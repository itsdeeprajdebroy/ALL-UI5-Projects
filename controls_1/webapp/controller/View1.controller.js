sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.co.controls1.controller.View1", {
        onInit() {
            const data = {
                products: [
                  { name: "Laptop", category: "Electronics", price: "1200 USD" },
                  { name: "Coffee Mug", category: "Kitchen", price: "15 USD" },
                  { name: "Backpack", category: "Accessories", price: "45 USD" },
                  { name: "Laptop1", category: "Electronics", price: "1200 USD" },
                  { name: "Coffee Mug1", category: "Kitchen", price: "15 USD" },
                  { name: "Backpack1", category: "Accessories", price: "45 USD" },
                  { name: "Laptop", category: "Electronics", price: "1200 USD" },
                  { name: "Coffee Mug", category: "Kitchen", price: "15 USD" },
                  { name: "Backpack", category: "Accessories", price: "45 USD" },
                  { name: "Laptop1", category: "Electronics", price: "1200 USD" },
                  { name: "Coffee Mug1", category: "Kitchen", price: "15 USD" },
                  { name: "Backpack1", category: "Accessories", price: "45 USD" },
                  { name: "Laptop", category: "Electronics", price: "1200 USD" },
                  { name: "Coffee Mug", category: "Kitchen", price: "15 USD" },
                  { name: "Backpack", category: "Accessories", price: "45 USD" },
                  { name: "Laptop1", category: "Electronics", price: "1200 USD" },
                  { name: "Coffee Mug1", category: "Kitchen", price: "15 USD" },
                  { name: "Backpack1", category: "Accessories", price: "45 USD" },
                  { name: "Laptop", category: "Electronics", price: "1200 USD" },
                  { name: "Coffee Mug", category: "Kitchen", price: "15 USD" },
                  { name: "Backpack", category: "Accessories", price: "45 USD" },
                  { name: "Laptop1", category: "Electronics4", price: "1200 USD" },
                  { name: "Coffee Mug1", category: "Kitchen3", price: "15 USD" },
                  { name: "Backpack1", category: "Accessories2", price: "45 USD" }
                ],
                selectedProduct: {}
              };
            
              const oModel = new sap.ui.model.json.JSONModel(data);
              this.getView().setModel(oModel, "son");
        },

        onPressNavToMaster2: function(oEvent) {
            this.byId("_IDGenSplitApp").toMaster(this.createId("pageMaster2"))
        },

        onPressNavToMaster1: function(oEvent) {
            // this.byId("_IDGenSplitApp").backMaster()
            this.byId("_IDGenSplitApp").toDetail(this.createId("pageDetail2"))
        },

        onPressNavToDetail2: function(oEvent) {
            // this.byId("_IDGenSplitApp").toDetail(this.createId("pageDetail2"))
        },

        onPressNavToDetail1: function(oEvent) {
            //this.byId("_IDGenSplitApp").backDetail()
        },

        onPressMsterBack: function(oEvent) {
            this.byId("_IDGenSplitApp").backMaster()
        },

        onPressDetailBack: function(oEvent) {
            this.byId("_IDGenSplitApp").backDetail()
        },

        // tool page
        onSideNavButtonPress: function() {
            const exp = this.byId("_IDGenSideNavigation1").getExpanded();
            this.byId("_IDGenSideNavigation1").setExpanded(!exp)
        },

        onItemPress: function(oEvent) {
            
            this.oRouter = this.getOwnerComponent().getRouter();
            const sKey = oEvent.getParameter("item").getKey();

            if(sKey === "VBox"){
                this.oRouter.getTargets().display("TargetVBox")
            }
                
        },

        onSelectItem: function (oEvent) {
            const oContext = oEvent.getParameter("listItem").getBindingContext("son").getProperty();
            
            const oModel = this.getView().getModel("son");
            oModel.setProperty("/selectedProduct", oContext);
          }

    });
});