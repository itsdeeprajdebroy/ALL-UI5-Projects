/*global QUnit*/

sap.ui.define([
	"sap/ro/application/bindingswithexample/controller/Rough.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Rough Controller");

	QUnit.test("I should test the Rough controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
