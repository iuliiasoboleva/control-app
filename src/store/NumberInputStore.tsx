import { makeAutoObservable } from 'mobx';

class NumberInputStore {
    text = '';

    constructor() {
        makeAutoObservable(this);
    }

    setText(value: string) {
        this.text = value;
    }

    showAlert() {
        alert(this.text);
    }

    showNumberAlert() {
        const parsedNumber = parseFloat(this.text);

        if (!isNaN(parsedNumber)) {
            alert(parsedNumber);
        } else {
            alert('Введите число в поле');
        }
    }
}

export default NumberInputStore;
