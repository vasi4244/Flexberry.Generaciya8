import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-generaciya8-форми-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-generaciya8-сп+сотр':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'имя',
            required: true,
            relationName: 'сотр',
            projection: 'СотрL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
