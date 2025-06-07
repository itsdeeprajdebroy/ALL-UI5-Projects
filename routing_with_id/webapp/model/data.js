sap.ui.define([
    "sap/ui/model/json/JSONModel"
], 
function (JSONModel) {
    "use strict";

    return {

        createDataModel: function () {
            const sServiceUrl = ("https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/Northwind/Northwind.svc/Products");
            const oModel = new JSONModel(sServiceUrl);
            return oModel;
        }
    };

});