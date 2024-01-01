import React from 'react';
import { observer } from 'mobx-react-lite';
import NumberInputStore from '../../store/NumberInputStore';

const numberInputStore = new NumberInputStore();

const NumberInputWithButtons: React.FC = observer(() => {
  const handleRightButtonClick = () => {
    numberInputStore.showAlert();
  };

  const handleLeftButtonClick = () => {
    numberInputStore.showNumberAlert();
  };

  return (
    <div>
      <input
        type="text"
        value={numberInputStore.text}
        onChange={(e) => numberInputStore.setText(e.target.value)}
      />
      <button onClick={handleLeftButtonClick}>Левая кнопка</button>
      <button onClick={handleRightButtonClick}>Правая кнопка</button>
    </div>
  );
});

export default NumberInputWithButtons;
