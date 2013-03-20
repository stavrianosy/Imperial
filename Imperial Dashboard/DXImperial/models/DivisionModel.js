function DivisionModel(name, companies) {
    var self = this;
    self.name = ko.observable(name);
    self.companies = ko.observableArray(companies);
    self.selected = ko.observable(false);
}