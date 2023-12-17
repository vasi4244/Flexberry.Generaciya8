import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СотрMixin
} from '../mixins/regenerated/models/i-i-s-generaciya8-сотр';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СотрMixin, Validations, {
});

defineProjections(Model);

export default Model;
