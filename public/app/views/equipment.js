(function () {
    $('#equipmentTabs').render(Gear.user, Gear.directives);
    
    Gear.data.getCategory({}).then(function(categories){
        // Switch plugin
        aja().url('assets/js/bootstrap-checkbox-radio-switch-tags.js').type('script').go();
        $('#category-list').render(categories, Gear.directives);

    }).catch(function(error){
        // TODO: handle error
    });
})();