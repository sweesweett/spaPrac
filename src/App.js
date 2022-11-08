import SearchInput from "./SearchInput";
import Suggestion from "./Suggestion";
import { fetchLanguages } from "./api";
import SelectedLanguages from "./SelectedLanguage";
export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: []
  };
  this.setState = (nextState) => {
    this.state = { ...this.state, ...nextState };
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages
    });
    selectedLanguages.setState(this.state.selectedLanguages);
  };
  const selectedLanguages = new SelectedLanguages({
    $target,
    initialState: []
  });
  const searchInput = new SearchInput({
    $target,
    initialState: "",
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: []
        });
      } else {
        const languages = await fetchLanguages(keyword);
        this.setState({
          fetchedLanguages: languages
        });
      }
    }
  });
  const suggestion = new Suggestion({
    $target,
    initialState: { selectedIndex: 0, items: [] },
    onSelect: (language) => {
      alert(language);
      const nextSelectedLanguages = [...this.state.selectedLanguages];
      const index = nextSelectedLanguages.findIndex((el) => el === language);
      console.log(index);
      if (index > -1) {
        nextSelectedLanguages.splice(index, 1);
      }
      nextSelectedLanguages.push(language);
      console.log(nextSelectedLanguages);
      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages
      });
    }
  });
}
