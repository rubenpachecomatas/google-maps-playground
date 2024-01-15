import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const AutoComplete = () => {
  const {
    value,
    setValue,
    suggestions: { data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = (address: string) => {
    setValue(address, false);
    clearSuggestions();
  };

  return (
    <Command className="w-80">
      <CommandInput
        value={value}
        onChangeCapture={(e) => setValue(e.currentTarget.value)}
        placeholder="Search location"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {data.map(({ description, place_id }) => (
            <CommandItem
              key={place_id}
              className="cursor-pointer"
              onSelect={handleSelect}
            >
              {description}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default AutoComplete;
