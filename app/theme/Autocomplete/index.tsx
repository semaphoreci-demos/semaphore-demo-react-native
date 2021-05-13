/**
 *
 * Autocomplete
 *
 */
import {useState} from 'react';
import {InputProps} from 'theme/Input';

interface AutocompleteState {
  value?: string;
  focus?: boolean;
}

interface IAutocompleteProps<ItemType> {
  initialState?: AutocompleteState;
  data?: ItemType[];
  filterKey?: string;
  onChange?: (...args: unknown[]) => void;
  onFocus?: (...args: unknown[]) => void;
  onBlur?: (...args: unknown[]) => void;
  filterFunction?: (payload: {data: ItemType[]; value: string}) => ItemType[];
}

interface AutocompleteOutput extends AutocompleteState {
  inputProps: InputProps;
  data;
  clear: () => void;
  blur: () => void;
}

function filterByKey({data, key, value}) {
  return (data || []).reduce((list, item) => {
    if (item[key] && item[key].toLowerCase().includes(value.toLowerCase())) {
      list.push(item);
    }
    return list;
  }, []);
}

const useAutocomplete = (props: IAutocompleteProps): AutocompleteOutput => {
  const [state, set] = useState<AutocompleteState>({
    value: props.initialState?.value || '',
    focus: props.initialState?.focus || false,
  });
  const setState = s => set({...state, ...s});

  let data = props.data || [];

  if (props.filterKey) {
    data = filterByKey({
      data: props.data,
      key: props.filterKey,
      value: state.value,
    });
  }

  if (props.filterFunction) {
    data = props.filterFunction({
      data: props.data,
      value: state.value,
    });
  }

  return {
    inputProps: {
      onChangeText: val => setState({value: val}),
      value: state.value,
      onFocus: () => setState({focus: true}),
      onBlur: () => setState({focus: false}),
      autoCorrect: false,
    },
    data,
    clear: () => setState({focus: false, value: ''}),
    blur: () => setState({focus: false}),
    ...state,
  };
};

export default useAutocomplete;
