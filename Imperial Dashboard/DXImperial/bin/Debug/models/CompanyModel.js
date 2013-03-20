function CompanyModel(name, selected) {
    var self = this;
    this.name = ko.observable(name);
    this.selected = ko.observable(selected);

    self.selectedCompanyCheckedChanged = function () {
        self.selected(!self.selected());
        alert("Selected Company " + self.name + " Changed");
    };
};