import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-generaciya8-сп', 'Unit | Serializer | i-i-s-generaciya8-сп', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-generaciya8-сп',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
