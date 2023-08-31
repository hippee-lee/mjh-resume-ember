import { module, test } from 'qunit';
import { setupTest } from 'mjh-resume/tests/helpers';

module('Unit | Route | education', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:education');
    assert.ok(route);
  });
});
