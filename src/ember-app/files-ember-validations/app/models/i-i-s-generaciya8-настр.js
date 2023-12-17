import {
  defineNamespace,
  defineProjections,
  Model as настрMixin
} from '../mixins/regenerated/models/i-i-s-generaciya8-настр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(настрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
