import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотр: DS.belongsTo('i-i-s-generaciya8-сотр', { inverse: null, async: false }),
  форми: DS.belongsTo('i-i-s-generaciya8-форми', { inverse: 'сп', async: false })
});

export let ValidationRules = {
  сотр: {
    descriptionKey: 'models.i-i-s-generaciya8-сп.validations.сотр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  форми: {
    descriptionKey: 'models.i-i-s-generaciya8-сп.validations.форми.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('спE', 'i-i-s-generaciya8-сп', {
    сотр: belongsTo('i-i-s-generaciya8-сотр', 'Сотр', {
      имя: attr('Имя', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'имя' })
  });
};
