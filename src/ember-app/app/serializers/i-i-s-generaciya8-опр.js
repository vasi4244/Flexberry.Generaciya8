import { Serializer as опрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-generaciya8-опр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(опрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
