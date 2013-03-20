(function($, DX, undefined) {

    DX.framework.html.NavBarController = DX.framework.html.DefaultLayoutController.inherit({

        _changeView: function(viewInfo) {
            var $navBar = viewInfo.renderResult.$markup.find(".dx-navbar"),
                navBar = $navBar.data("dxNavBar"),
                $content = viewInfo.renderResult.$markup.find(".layout-content");

            var isNavBarVisible = false;

            for(var i in navBar.option("items")) {
                if(navBar.option("items[" + i + "].visible")) {
                    isNavBarVisible = true;
                    break;
                }
            }

            if(isNavBarVisible) {
                $content.addClass("has-navbar");
                $navBar.show();
            }
            else {
                $content.removeClass("has-navbar");
                $navBar.hide();
            }
            this.callBase.apply(this, arguments);
        },

    });

    DX.framework.html.layoutControllers.navbar = new DX.framework.html.NavBarController();

})(jQuery, DevExpress);