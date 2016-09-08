(function () {
    // apply user settings
    $('#equipmentTabs').render(Gear.user, Gear.directives);

    // show inner search bar if on mobile
    if (Gear.isMobile) {
        $('#equipment-mobile-search').removeClass("hidden");
    }


    // get all categories from the db
    Gear.data.getCategory({}).then(function(categories){
        // Switch plugin
        aja().url('assets/js/bootstrap-checkbox-radio-switch-tags.js').type('script').go();
        $('#category-list').render(categories, Gear.directives);

    }).catch(function(error){
        // TODO: handle error
    });
})();