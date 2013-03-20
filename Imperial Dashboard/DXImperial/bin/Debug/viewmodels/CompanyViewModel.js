function CompanyViewModel(companies) {
    var self = this;
    self.companies = ko.observableArray(companies);
}