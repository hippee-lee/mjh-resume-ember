import { module, test } from 'qunit';
import { setupTest } from 'mjh-resume/tests/helpers';

module('Unit | Route | experience', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:experience');
    assert.ok(route);
  });
});
