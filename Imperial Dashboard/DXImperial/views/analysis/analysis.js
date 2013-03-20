Imperial.DataAnalysis = function (params) {

    var profitAnalysis_1 = new Imperial.ProfitAnalysis();
    var profitAnalysis_2 = new Imperial.ProfitAnalysis();

    var profitAnalysisList = [];

    var viewModel = {
        subTitle: 'Operating Profit / Operating Profit Margin / Profit Before Tax',

        profitAnalysisList: [GetItem(1), GetItem(2)],
        profitAnalysis: profitAnalysisList[1],
    };

    return viewModel;
};

function GetItem(company)
{
    return {

        Company: "Exelia_" + company,
        Revenue_Month_Actual: 11,
        Revenue_Month_Budget: 12,
        Revenue_Month_Last: 13,

        Revenue_YTD_Actual: 21,
        Revenue_YTD_Budget: 22,
        Revenue_YTD_Last: 22,

        Revenue_December_Actual: 31,
        Revenue_December_Budget: 32,
        Revenue_December_Last: 33,

        Revenue_Forecast_Actual: 41,
        Revenue_Forecast_Budget: 42,
        Revenue_Forecast_Last: 43,

        OpProfit_Month_Actual: 51,
        OpProfit_Month_Budget: 52,
        OpProfit_Month_Last: 53,

        OpProfit_YTD_Actual: 61,
        OpProfit_YTD_Budget: 62,
        OpProfit_YTD_Last: 63,

        OpProfit_December_Actual: 71,
        OpProfit_December_Budget: 72,
        OpProfit_December_Last: 73,

        OpProfit_Forecast_Actual: 81,
        OpProfit_Forecast_Budget: 82,
        OpProfit_Forecast_Last: 83,

        ProfitBeforeTax_Month_Actual: 91,
        ProfitBeforeTax_Month_Budget: 92,
        ProfitBeforeTax_Month_Last: 93,

        ProfitBeforeTax_YTD_Actual: 91,
        ProfitBeforeTax_YTD_Budget: 92,
        ProfitBeforeTax_YTD_Last: 93,

        ProfitBeforeTax_December_Actual: 91,
        ProfitBeforeTax_December_Budget: 92,
        ProfitBeforeTax_December_Last: 93,

        ProfitBeforeTax_Forecast_Actual: 91,
        ProfitBeforeTax_Forecast_Budget: 92,
        ProfitBeforeTax_Forecast_Last: 93,

        OpProfitMargin_Month_Actual: 101,
        OpProfitMargin_Month_Budget: 102,
        OpProfitMargin_Month_Last: 103,

        OpProfitMargin_YTD_Actual: 61,
        OpProfitMargin_YTD_Budget: 62,
        OpProfitMargin_YTD_Last: 63,

        OpProfitMargin_December_Actual: 61,
        OpProfitMargin_December_Budget: 62,
        OpProfitMargin_December_Last: 63,

        OpProfitMargin_Forecast_Actual: 61,
        OpProfitMargin_Forecast_Budget: 62,
        OpProfitMargin_Forecast_Last: 63,
    }
}