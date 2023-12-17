import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-generaciya8-настр', 'Unit | Model | i-i-s-generaciya8-настр', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-generaciya8-настр',
    'model:i-i-s-generaciya8-опр',
    'model:i-i-s-generaciya8-содер',
    'model:i-i-s-generaciya8-сотр',
    'model:i-i-s-generaciya8-сп',
    'model:i-i-s-generaciya8-форми',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
