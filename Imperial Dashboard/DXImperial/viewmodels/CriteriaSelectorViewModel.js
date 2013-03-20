function CriteriaSelectorViewModel() {
    var self = this;

    self.divisions = DXImperial.db.getAllDivisionsWithCompanies();
    self.companies = ko.observableArray([]);
    self.rangeDataSource = ko.observableArray([
                    { x: 0, y: 45 },
                    { x: 25, y: 30 },
                    { x: 50, y: 24 },
                    { x: 75, y: 69 },
                    { x: 100, y: 33 }]);
    self.rangeSelectorOptions = ko.observable({
        selectedRangeChanged: function (selectedRange) {
            alert(selectedRange.startValue);
        },
        dataSource: self.rangeDataSource,
        dataSourceField: 'x'
    });
    self.selectedDivision = ko.observable({});
    self.selectedYearRange = ko.observableArray([]);
    self.selectedMonthRange = ko.observableArray([]);
    self.selectedQuarters = ko.observableArray([]);
    self.selectedRadioForRange = ko.observable();

    self.selectedRadioForRange.subscribe(function (newValue) {
        switch (self.selectedRadioForRange) {
            case "MM":
                //window.alert("MM");
                self.rangeDataSource([
                    { x: 1, y: 45 },
                    { x: 5, y: 30 },
                    { x: 10, y: 24 },
                    { x: 20, y: 69 },
                    { x: 50, y: 33 }
                    ]);
                break;
            case "YY":
                //window.alert("YY");
                break;
            case "Q":
                //window.alert("Q");
                break;
            default:
                self.rangeDataSource([]);
                //window.alert(newValue);
                break;
        }

    }, self);

    self.selectedDivisionIndexChanged = function (e) {
        self.companies(e.itemData.companies());
        self.selectedDivision(e.itemData);
    };

    self.selectAllCompanies = function (e) {
        alert("Should Select All Companies");
    };
}