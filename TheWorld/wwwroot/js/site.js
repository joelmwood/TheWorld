// site.js
(function () {

    //var ele = $("#username");
    //ele.text("john doe");

    //var main = document.getelementbyid("main");
    //main.onmouseenter = function () {
    //    main.style.backgroundcolor = "#888";
    //};

    //main.onmouseleave = function () {
    //    main.style.backgroundcolor = "#eee";
    //};

    //var menuitems = $("ul.menu li a");
    //menuitems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //})

    var sidebarAndWrapper = $("#sidebar,#wrapper");

    $("#sidebarToggle").on("click", function () {
        sidebarAndWrapper.toggleClass("hide-sidebar");
        if (sidebarAndWrapper.hasClass("hide-sidebar")) {
            $(this).text("Show Sidebar");
        } else {
            $(this).text("Hide Sidebar");
        }
    });
})();