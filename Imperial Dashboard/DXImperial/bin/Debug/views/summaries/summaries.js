DXImperial.summaries = function (params) {

    var companiesStore = [];
    var theCompanies = DXImperial.db.getAllCompanies();
    
    for (var i = 0; i < theCompanies.length; i++) {
        var newCompanyItem = new CompanyModel(theCompanies[i], false);
        companiesStore.push(newCompanyItem);
    }

    ko.applyBindings(companiesStore);
    return companiesStore;
};

selectedItemCheckedChanged = function (e) {
    e.itemData.selected(!e.itemData.selected());
};