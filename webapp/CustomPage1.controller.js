sap.ui.define(["sap/fe/core/PageController"], function (PageController) {
	"use strict";

	return PageController.extend("sap.fe.core.fpmExplorer.customPageContent.CustomPage1", {
		onInit: function () {
			//make sure to call prototype onInit before adding custom code here
			PageController.prototype.onInit.apply(this);
			//custom code added here
		},
		onPressed: function (oEvent) {
			var oContext = oEvent.getSource().getBindingContext();
			this.routing.navigate(oContext);
		},
		onPress: function (oEvent) {
			var aFilters = [];
			
			var oTableBinding = this.getView().byId("macroTable1").getRowBinding();
			var aContext = oEvent.getSource().getSelectedContexts();
			if (aContext.length === 0) {
				this.getView().byId("macroTable1").setVisible(false);
			}else{
				this.getView().byId("macroTable1").setVisible(true);
				aContext.forEach(element => {
					var sID = element.getProperty("ID").toString();
					aFilters.push(new sap.ui.model.Filter("Parent_ID", 'EQ', sID.toString()));
				});
				oTableBinding.filter(aFilters);
			}
			
		},
		onBeforeRebindTable: function(oEvent){
			oEvent.getSource().setVisible(false);
		}
	});
});
