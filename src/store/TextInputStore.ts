import { makeAutoObservable } from 'mobx';

class TextInputStore {
  text = '';

  constructor() {
    makeAutoObservable(this);
  }

  setText(value: string) {
    this.text = value;
  }

  clearText() {
    this.text = '';
  }

  handleSecondButtonClick() {
    this.text = 'Hello world!';
  }
}

export default TextInputStore;
