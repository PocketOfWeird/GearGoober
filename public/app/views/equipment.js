(function () {
    $('#equipmentTabs').render(Gear.user, Gear.directives);
    
    Gear.data.getCategory({}).then(function(categories){
        $('#category-list').render(categories, Gear.directives);

    }).catch(function(error){
        // TODO: handle error
    });
})();