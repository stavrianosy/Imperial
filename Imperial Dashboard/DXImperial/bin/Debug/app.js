window.DXImperial = window.DXImperial || {};

$(function() {
    DXImperial.app = new DevExpress.framework.html.HtmlApplication({
        ns: DXImperial,
        viewPortNode: document.getElementById("view-port"),
        defaultLayout: DXImperial.config.defaultLayout,
        navigation: DXImperial.config.navigation
    });
    DXImperial.app.router.register(":view/:id", { view: "Index", id: undefined });
});
