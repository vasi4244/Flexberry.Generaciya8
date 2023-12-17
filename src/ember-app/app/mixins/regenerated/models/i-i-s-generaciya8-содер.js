import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  во1: DS.attr('string'),
  во2: DS.attr('string'),
  во3: DS.attr('string'),
  воп: DS.attr('string'),
  настр: DS.belongsTo('i-i-s-generaciya8-настр', { inverse: 'содер', async: false })
});

export let ValidationRules = {
  во1: {
    descriptionKey: 'models.i-i-s-generaciya8-содер.validations.во1.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  во2: {
    descriptionKey: 'models.i-i-s-generaciya8-содер.validations.во2.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  во3: {
    descriptionKey: 'models.i-i-s-generaciya8-содер.validations.во3.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  воп: {
    descriptionKey: 'models.i-i-s-generaciya8-содер.validations.воп.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  настр: {
    descriptionKey: 'models.i-i-s-generaciya8-содер.validations.настр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('содерE', 'i-i-s-generaciya8-содер', {
    воп: attr('Воп', { index: 0 }),
    во1: attr('Во1', { index: 1 }),
    во2: attr('Во2', { index: 2 }),
    во3: attr('Во3', { index: 3 })
  });
};
