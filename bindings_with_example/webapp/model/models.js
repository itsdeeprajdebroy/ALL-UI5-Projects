sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime information for the device the UI5 app is running on as a JSONModel.
         * @returns {sap.ui.model.json.JSONModel} The device model.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },

        createDataModel: function() {
            return fetch('https://jsonplaceholder.typicode.com/comments/') // returns >> resolve or reject
            .then((res) => {
                return res.json()
            })
            .then((user) => {
                return new JSONModel(user)
            })
            .catch((err) => {
                new Error("Error")
            })
        }
    };

});