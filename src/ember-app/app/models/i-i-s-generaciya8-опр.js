import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as опрMixin
} from '../mixins/regenerated/models/i-i-s-generaciya8-опр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(опрMixin, Validations, {
});

defineProjections(Model);

export default Model;
