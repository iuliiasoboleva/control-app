import { makeAutoObservable } from 'mobx';
import { getCountryByName, CountryInfo } from '../api/apiService';

class AutoCompleteStore {
  text = '';
  suggestions: CountryInfo[] = [];
  maxSuggestions: number;

  constructor(maxSuggestions: number) {
    this.maxSuggestions = maxSuggestions;
    makeAutoObservable(this);
  }

  setText(value: string) {
    this.text = value;
    this.fetchSuggestions();
  }

  async fetchSuggestions() {
    if (this.text.trim() === '') {
      this.suggestions = [];
      return;
    }

    try {
      const data = await getCountryByName(this.text);
      this.suggestions = data.slice(0, this.maxSuggestions);
    } catch (error) {
      console.error('Error fetching country suggestions:', error);
    }
  }

  selectSuggestion(suggestion: CountryInfo) {
    this.text = suggestion.name;
    this.suggestions = [];
  }
}

export default AutoCompleteStore;
