function DivisionViewModel(divisionModels, rangeSelectorOpts) {
    var self = this;
    self.divisions = divisionModels;
    self.companies = ko.observable([]);
    self.rangeSelectorOptions = ko.observable(rangeSelectorOpts);

    self.selectedDivisionIndexChanged = function(e) {
        self.companies(e.itemData.companies());
    };

    self.selectAllCompanies = function (e) {
        alert("Should Select All Companies");
    };
}