function CriteriaSelectorViewModel() {
    var self = this;

    self.divisions = DXImperial.db.getAllDivisionsWithCompanies();
    self.companies = ko.observableArray([]);
    self.monthsRangeDataSource = DXImperial.db.getMonthsLookUpData;
    self.yearsRangeDataSource = DXImperial.db.getYearsLookUpData;
    self.quartersRangeDataSource = DXImperial.db.getQuartersLookUpData;
    self.rangeSelectorOptions = ko.observable({});
    self.selectedDivision = ko.observable({});
    self.selectedYearRange = ko.observableArray([]);
    self.selectedMonthRange = ko.observableArray([]);
    self.selectedQuarters = ko.observableArray([]);
    self.selectedRadioForRange = ko.observable();
    self.monthStartValue = self.monthsRangeDataSource[0];
    self.monthEndValue = self.monthsRangeDataSource[self.monthsRangeDataSource.length - 1];
    self.yearStartValue = self.yearsRangeDataSource[0];
    self.yearEndValue = self.yearsRangeDataSource[self.yearsRangeDataSource.length - 1];
    self.quarterStartValue = self.quartersRangeDataSource[0].Quarter;
    self.quarterEndValue = self.quartersRangeDataSource[self.quartersRangeDataSource.length - 1].Quarter;

    self.selectedRadioForRange.subscribe(function (newValue) {
        switch (newValue) {
            case "MM":
                self.rangeSelectorOptions({
                    selectedRangeChanged: function (selectedRange) {
                        self.monthStartValue = selectedRange.startValue;
                        self.monthEndValue = selectedRange.endValue;
                    },
                    dataSource: self.monthsRangeDataSource,
                    dataSourceField: 'Month',
                    selectedRange: {
                        startValue: self.monthStartValue,
                        endValue: self.monthEndValue
                    }
                });
                break;
            case "YY":
                self.rangeSelectorOptions({
                    selectedRangeChanged: function (selectedRange) {
                        self.yearStartValue = selectedRange.startValue;
                        self.yearEndValue = selectedRange.endValue;
                    },
                    dataSource: self.yearsRangeDataSource,
                    dataSourceField: 'Year',
                    selectedRange: {
                        startValue: self.yearStartValue,
                        endValue: self.yearEndValue
                    }
                });
                break;
            case "Q":
                self.rangeSelectorOptions({
                    selectedRangeChanged: function (selectedRange) {
                        self.quarterStartValue = selectedRange.startValue;
                        self.quarterEndValue = selectedRange.endValue;
                    },
                    dataSource: self.quartersRangeDataSource,
                    dataSourceField: 'Id',
                    selectedRange: {
                        startValue: self.quarterStartValue,
                        endValue: self.quarterEndValue
                    }
                });
                break;
            default:
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