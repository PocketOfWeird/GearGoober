(function () {
    $('#equipmentTabs').render(Gear.user, Gear.directives);
    $('#equip-list').render(Gear.data.getEquipment, Gear.directives);
})();