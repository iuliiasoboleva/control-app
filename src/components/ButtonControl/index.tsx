import React from 'react';
import { observer } from 'mobx-react-lite';
import TextInputStore from '../../store/TextInputStore';

const textInputStore = new TextInputStore();

const TextInputWithButtons: React.FC = observer(() => {
  const handleClearClick = () => {
    textInputStore.clearText();
  };

  const handleSecondButtonClick = () => {
    textInputStore.handleSecondButtonClick();
  };

  return (
    <div>
      <input
        type="text"
        value={textInputStore.text}
        onChange={(e) => textInputStore.setText(e.target.value)}
      />
      <button onClick={handleClearClick}>Очистить</button>
      <button onClick={handleSecondButtonClick}>Вторая кнопка</button>
    </div>
  );
});

export default TextInputWithButtons;
