jQuery.sap.declare("sap.ui.sousa.PoApproval.util.Grouper");

sap.ui.sousa.PoApproval.util.Grouper = {

	bundle : null, // somebody has to set this

	LifecycleStatus : function (oContext) {
		var status = oContext.getProperty("status");
		var text = sap.ui.sousa.PoApproval.util.Grouper.bundle.getText("StatusText" + status, "?");
		return {
			key: status,
			text: text
		};
	},

	GrossAmount : function (oContext) {
		var price = oContext.getProperty("totalValue");
		var currency = "USD";
		var key = null,
			text = null;
		if (price <= 5000) {
			key = "LE10";
			text = "< 5000 " + currency;
		} else if (price > 5000 && price <= 10000) {
			key = "LE100";
			text = "< 10.000  " + currency;
		} else if (price > 10000) {
			key = "GT100";
			text = "> 10.000 " + currency;
		}
		return {
			key: key,
			text: text
		};
	}
};