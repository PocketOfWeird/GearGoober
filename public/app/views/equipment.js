(function() {
    Gear.views.equipment = {
        init : function() {
            // apply user settings
            $('#equipmentTabs').render(Gear.user, Gear.directives);

            // show inner search bar if on mobile
            if (Gear.util.isMobile()) {
                $('#equipment-mobile-search').removeClass("hidden");
            }
        },
        destroy: function() {
            // Remove any variables created        
        }
    }
})();