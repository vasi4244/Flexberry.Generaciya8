import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  опр: DS.belongsTo('i-i-s-generaciya8-опр', { inverse: null, async: false }),
  сп: DS.hasMany('i-i-s-generaciya8-сп', { inverse: 'форми', async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-generaciya8-форми.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  опр: {
    descriptionKey: 'models.i-i-s-generaciya8-форми.validations.опр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сп: {
    descriptionKey: 'models.i-i-s-generaciya8-форми.validations.сп.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('формиE', 'i-i-s-generaciya8-форми', {
    код: attr('Код', { index: 0 }),
    опр: belongsTo('i-i-s-generaciya8-опр', 'Опр', {
      имя: attr('Имя', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'имя' }),
    сп: hasMany('i-i-s-generaciya8-сп', 'Сп', {
      сотр: belongsTo('i-i-s-generaciya8-сотр', 'Сотр', {
        имя: attr('Имя', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'имя' })
    })
  });

  modelClass.defineProjection('формиL', 'i-i-s-generaciya8-форми', {
    код: attr('Код', { index: 0 }),
    опр: belongsTo('i-i-s-generaciya8-опр', 'Имя', {
      имя: attr('Имя', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
