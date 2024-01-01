import React from 'react';
import ButtonControl from './components/ButtonControl';
import NumberInputWithButtons from './components/NumberInputWithButtons';
import AutoComplete from './components/AutocompleteControl';

const App: React.FC = () => {
  return (
    <div>
      <ButtonControl />
      <NumberInputWithButtons />
      <AutoComplete maxSuggestions={3} />
      <AutoComplete maxSuggestions={10} />
    </div>
  );
};

export default App;
