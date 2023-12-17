import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-generaciya8-сотр.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрE', 'i-i-s-generaciya8-сотр', {
    имя: attr('Имя', { index: 0 })
  });

  modelClass.defineProjection('СотрL', 'i-i-s-generaciya8-сотр', {
    имя: attr('Имя', { index: 0 })
  });
};
