import { Serializer as СотрSerializer } from
  '../mixins/regenerated/serializers/i-i-s-generaciya8-сотр';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СотрSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
