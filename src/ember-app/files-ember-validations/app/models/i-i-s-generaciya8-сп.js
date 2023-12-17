import {
  defineNamespace,
  defineProjections,
  Model as спMixin
} from '../mixins/regenerated/models/i-i-s-generaciya8-сп';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(спMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
