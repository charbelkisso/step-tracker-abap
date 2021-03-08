sap.ui.define(
	["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],
	function (Controller, UIComponent) {
		"use strict";

		return Controller.extend(
			"cgi.demo.employee.steps.register.stepsregistration.controller.Home",
			{
				onInit: function () {},

				/**
				 *
				 * @param {*} oEvent
				 */
				onTableItemPress: function (oEvent) {
					let oRouter = this._getRouter();
					let sUserID = oEvent
						.getSource()
						.getBindingContext()
						.getObject("UserID");
					oRouter.navTo(
						"Register",
						{
							UserID: sUserID,
						},
						false
					);
				},
				_getRouter() {
					return UIComponent.getRouterFor(this);
				},
			}
		);
	}
);
