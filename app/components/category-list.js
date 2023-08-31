import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class CategoryListtComponent extends Component {
  @action
  showItem(item) {
    alert(`The task was to ${item.task}.`);
  }
}
