({
  doInit: function (component, event, helper) {
    let recordId = component.get("v.recordId");
    let insight = component.get("v.insight");
    /*
    let promises = [
      helper.getTypes(component),
      helper.getTrendTypes(component)
    ];

    Promise.all(promises)
      .then(function () {
        let insightTrend = component.find("insightType");
        let insightTrendType = component.find("insightTrendType");

        if (insight.Type) insightTrend.set("v.value", insight.Type);
        if (insight.TrendType)
          insightTrendType.set("v.value", insight.TrendType);

        if (helper.VERBOSE)
          console.log(JSON.stringify(component.get("v.insight", null, 2)));
      })
      .then(function () {
        if (!insight.hasOwnProperty("Id")) {
          let trendTypeOptions = component.get("v.trendTypeOptions");
          let typeOptions = component.get("v.typeOptions");

          component.set("v.insight", {
            Score: 1,
            AccountId: recordId,
            TrendType: trendTypeOptions[0].value,
            Type: typeOptions[0].value,
            NumberOfNewsArticles: "3"
          });
        }
      });
      */
  },
  handleValueChange: function (component, event, helper) {
    helper.hasRequiredFields(component).then(function (isValid) {
      if (isValid) {
        component.set("v.disableSave", false);
      } else {
        component.set("v.disableSave", true);
      }
    });
  },
  handleSave: function (component, event, helper) {
    let record = component.get("v.insight");
    //Update or insert for Database methods of for non defined SObject types
    let action = "c.upsertRecords";

    if (helper.VERBOSE) console.log(JSON.stringify(record, null, 2));
  },
  goBack: function (component, event, helper) {
    helper.goToState(component, {
      type: "c:SDO_Tool_Insights_AccountInsights",
      attributes: {
        recordId: component.get("v.recordId")
      }
    });
  }
});