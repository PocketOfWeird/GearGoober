Gear.views.equipment = {}

Gear.views.equipment.handlers = {
    search: function(req) {
        var term = req.params.term;
        api.getData('equipment', {$text:{$search: term }})
        .then(function(equipment) {
            $('#equip-list').render(equipment, Gear.directives);
            $('#equip-list').removeClass("hidden");
        })
        .catch(function(err) {
            // TODO: Handle error
        });
    }
}

Gear.views.equipment.init = function() {
    // initialize subrouter
    var subrouter = new Grapnel();
    subrouter.get('v/equipment/search/:term', Gear.views.equipment.handlers.search);

    // apply user settings
    $('#equipmentTabs').render(Gear.user, Gear.directives);

    // show inner search bar if on mobile
    if (Gear.util.isMobile()) {
        $('#equipment-mobile-search').removeClass("hidden");
    }
}

Gear.views.equipment.destroy = function() {
    // Remove any variables created      
}