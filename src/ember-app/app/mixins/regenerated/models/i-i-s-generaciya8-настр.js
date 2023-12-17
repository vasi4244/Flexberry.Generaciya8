import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  опр: DS.belongsTo('i-i-s-generaciya8-опр', { inverse: null, async: false }),
  содер: DS.hasMany('i-i-s-generaciya8-содер', { inverse: 'настр', async: false })
});

export let ValidationRules = {
  опр: {
    descriptionKey: 'models.i-i-s-generaciya8-настр.validations.опр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  содер: {
    descriptionKey: 'models.i-i-s-generaciya8-настр.validations.содер.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('настрE', 'i-i-s-generaciya8-настр', {
    опр: belongsTo('i-i-s-generaciya8-опр', 'Опр', {
      имя: attr('Имя', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'имя' }),
    содер: hasMany('i-i-s-generaciya8-содер', 'Содер', {
      воп: attr('Воп', { index: 0 }),
      во1: attr('Во1', { index: 1 }),
      во2: attr('Во2', { index: 2 }),
      во3: attr('Во3', { index: 3 })
    })
  });

  modelClass.defineProjection('настрL', 'i-i-s-generaciya8-настр', {
    опр: belongsTo('i-i-s-generaciya8-опр', 'Имя', {
      имя: attr('Имя', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
