(function () {
    $('#equipmentTabs').render(Gear.user, Gear.directives);
    
    Gear.data.getEquipment({}).then(function(equipment){
        $('#equip-list').render(equipment, Gear.directives);
    }).catch(function(error){
        // TODO: handle error
    });
})();