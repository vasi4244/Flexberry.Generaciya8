import {
  defineNamespace,
  defineProjections,
  Model as опрMixin
} from '../mixins/regenerated/models/i-i-s-generaciya8-опр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(опрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
