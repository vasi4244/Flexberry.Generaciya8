import { Serializer as формиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-generaciya8-форми';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(формиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
