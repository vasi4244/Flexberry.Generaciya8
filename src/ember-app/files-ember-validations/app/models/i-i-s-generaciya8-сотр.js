import {
  defineNamespace,
  defineProjections,
  Model as СотрMixin
} from '../mixins/regenerated/models/i-i-s-generaciya8-сотр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
