sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.co.controls1.controller.View1", {
        onInit() {
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
        }
    });
});