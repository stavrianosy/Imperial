DXImperial.partialOverlay = function (params) {

    showText = "Show Overay";
    hideText = "Hide Overlay";
    message = "This is a pop-up window";

    showOverlay = function () {
        var overlay = $("#overlay").data("dxOverlay");
        overlay.show();
    };
    hideOverlay = function () {
        var overlay = $("#overlay").data("dxOverlay");
        overlay.hide();
    };
    var viewModel = new CriteriaSelectorViewModel();

    return viewModel;
};