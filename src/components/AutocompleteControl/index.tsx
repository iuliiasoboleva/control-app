import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import AutoCompleteStore from '../../store/AutocompleteStore';

interface AutoCompleteProps {
  maxSuggestions: number;
}

const AutoComplete: React.FC<AutoCompleteProps> = observer(({ maxSuggestions }) => {
  const [autoCompleteStore] = useState(() => new AutoCompleteStore(maxSuggestions));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    autoCompleteStore.setText(e.target.value);
  };

  const handleSuggestionClick = (suggestion: { name: string; fullName: string; flag: string }) => {
    autoCompleteStore.selectSuggestion(suggestion);
  };

  return (
    <div>
      <input
        type="text"
        value={autoCompleteStore.text}
        onChange={handleInputChange}
        placeholder="Введите текст"
      />
      <ul>
        {autoCompleteStore.suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.name} - {suggestion.fullName} {suggestion.flag}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default AutoComplete;
