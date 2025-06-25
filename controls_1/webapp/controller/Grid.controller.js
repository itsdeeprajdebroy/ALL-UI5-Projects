sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (Controller) => {
    "use strict";
  
    return Controller.extend("sap.co.controls1.controller.Grid", {
        onInit() {
        },
        onClick: function() {
          const oImg = this.byId("_IDGenButton")
          const oBut = this.byId("_IDGenButton5")
          const bVis = oImg.getVisible()
          oImg.setVisible(!bVis)
          if(!bVis){
            oBut.setText("Hide Img")
          }
          else{
            oBut.setText("Show Img")
          }

        }

    });
  });