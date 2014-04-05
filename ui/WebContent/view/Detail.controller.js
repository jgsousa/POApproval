jQuery.sap.require("sap.ui.sousa.PoApproval.util.Formatter");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("sap.ui.sousa.PoApproval.view.Detail", {

	handleNavButtonPress : function (evt) {
		this.nav.back("Master");
	},

	onBeforeRendering:function(){
		this.byId("SupplierForm").bindElement("SupplierSet");
	},
	
	handleApprove : function (evt) {

		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(
			bundle.getText("ApproveDialogMsg"),
			function (oAction) {
				if (sap.m.MessageBox.Action.OK === oAction) {
					// notify user
					var successMsg = bundle.getText("ApproveDialogSuccessMsg");
					
					var oModel = sap.ui.getCore().byId("Detail").getController().getView().getModel();
					var po = sap.ui.getCore().byId("Detail").getController().getView().getBindingContext();
					
					var oEntry = {};
					var oParams = {};
					oEntry.approved = "X";
					oParams.fnSuccess = function (){
													sap.m.MessageToast.show(successMsg);
													sap.ui.getCore().byId("Detail").getController().nav.to("Empty");
													sap.ui.getCore().byId("Detail").getController().nav.back("Master");
													};
					oParams.fnError = function () {sap.m.MessageToast.show("Error during update");};
					oParams.bMerge = true;
					oModel.update(po.toString(), oEntry, oParams);
				}
			},
			
			bundle.getText("ApproveDialogTitle")
		);
	},
	
	handleReject : function (evt) {

		// show confirmation dialog
		var bundle = this.getView().getModel("i18n").getResourceBundle();
		sap.m.MessageBox.confirm(
			bundle.getText("RejectDialogMsg"),
			function (oAction) {
				if (sap.m.MessageBox.Action.OK === oAction) {
					// notify user
					var successMsg = bundle.getText("RejectDialogSuccessMsg");
					
					var oModel = sap.ui.getCore().byId("Detail").getController().getView().getModel();
					var po = sap.ui.getCore().byId("Detail").getController().getView().getBindingContext();
					
					var oEntry = {};
					var oParams = {};
					oEntry.approved = "R";
					oParams.fnSuccess = function (){
													sap.m.MessageToast.show(successMsg);
													sap.ui.getCore().byId("Detail").getController().nav.to("Empty");
													sap.ui.getCore().byId("Detail").getController().nav.back("Master");
													};
					oParams.fnError = function () {sap.m.MessageToast.show("Error during update");};
					oParams.bMerge = true;
					oModel.update(po.toString(), oEntry, oParams);
				}
			},
			
			bundle.getText("RejectDialogTitle")
		);
	},
	
});