/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cgidemo.employee.steps.register./steps-registration/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
