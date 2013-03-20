function CriteriaSelectorViewModel() {
    var self = this;

    self.divisions = DXImperial.db.getAllDivisionsWithCompanies();
    self.companies = ko.observableArray([]);
    self.rangeDataSource = [];//ko.observableArray([]);
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
    self.monthStartValue = 100;
    self.monthEndValue = 200;
    self.yearStartValue = "";
    self.yearEndValue = "";
    self.quarterStartValue = "";
    self.quarterEndValue = "";

    self.selectedRadioForRange.subscribe(function (newValue) {
        switch (newValue) {
            case "MM":
                //window.alert("MM");
                self.rangeDataSource = [
                    { x: 110, y: 45 },
                    { x: 250, y: 30 },
                    { x: 500, y: 24 },
                    { x: 750, y: 69 },
                    { x: 1000, y: 33 }];
                self.rangeSelectorOptions({
                    selectedRangeChanged: function (selectedRange) {
                        self.monthStartValue = selectedRange.startValue;
                        self.monthEndValue = selectedRange.endValue;
                    },
                    dataSource: self.rangeDataSource,
                    dataSourceField: 'x',
                    selectedRange: {
                        startValue: self.monthStartValue,
                        endValue: self.monthEndValue
                    }
                });
                break;
            case "YY":
                //window.alert("YY");
                self.rangeDataSource([
                    { x: 100, y: 45 },
                    { x: 150, y: 30 },
                    { x: 200, y: 24 },
                    { x: 250, y: 69 },
                    { x: 300, y: 33 }]);
                break;
            case "Q":
                //window.alert("Q");
                self.rangeDataSource([
                    { x: 5, y: 45 },
                    { x: 25, y: 30 },
                    { x: 50, y: 24 },
                    { x: 75, y: 69 },
                    { x: 100, y: 33 }]);
                break;
            default:
                //self.rangeDataSource([]);
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