function CompanyValueModel(name, selected) {
    var self = this;
    this.name = ko.observable(name);
    this.selected = ko.observable(selected);
};