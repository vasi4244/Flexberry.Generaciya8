import {
  defineNamespace,
  defineProjections,
  Model as формиMixin
} from '../mixins/regenerated/models/i-i-s-generaciya8-форми';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(формиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
