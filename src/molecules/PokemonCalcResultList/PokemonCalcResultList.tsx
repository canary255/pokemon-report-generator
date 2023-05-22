import { useState } from "react";
import { Sprite } from "../../atom/Sprite/Sprite";
import { TextFieldCommon } from "../../atom/TextFieldCommon/TextFieldCommon";
import { CalcList } from "../../types/calcList";
import { survivalColor } from "../../utils/color";
import { Button } from "../../atom/Button/Button";

type PokemonCalcResultProps = {
  resultsCalcs: CalcList[];
  setPokemonInfo: React.Dispatch<React.SetStateAction<CalcList | undefined>>;
};

export const PokemonCalcResultList = ({
  resultsCalcs,
  setPokemonInfo,
}: PokemonCalcResultProps) => {
  const [filteredList, setFilteredList] = useState<CalcList[]>([
    ...resultsCalcs,
  ]);
  const [textInput, setTextInput] = useState<string>("");

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTextInput(value);
    const filtered = resultsCalcs.filter((item) => {
      return item.pokemon.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredList(filtered);
  };

  const filterBySurvival = (canSurvive: "yes" | "barely" | "no") => {
    const filtered = resultsCalcs.filter((item) => {
      return item.canSurvive.includes(canSurvive);
    });
    setFilteredList(filtered);
  };

  return (
    <>
      <div className="flex justify-center mt-2 mb-3">
        <TextFieldCommon
          placeholder="Write the Pokémon name"
          width="L"
          onChange={handleFilter}
        />
        <Button
          name="yes"
          label="Si"
          onClick={() => filterBySurvival("yes")}
        ></Button>
        <Button
          name="barely"
          label="barely"
          onClick={() => filterBySurvival("barely")}
        ></Button>
        <Button
          name="no"
          label="no"
          onClick={() => filterBySurvival("no")}
        ></Button>
        <Button
          name="all"
          label="all"
          onClick={() => setFilteredList(resultsCalcs)}
        ></Button>
        {filteredList.length}
      </div>
      <div className="grid grid-cols-5 gap-y-6 max-h-72 overflow-auto place-items-center px-6">
        {filteredList.map((item, index) => {
          return (
            <Sprite
              key={index}
              src={item?.img}
              pokemonName={item?.pokemon}
              className={`${survivalColor(
                item?.calcExtreme?.ko_chance
              )} w-[72px] cursor-pointer`}
              onClick={() => setPokemonInfo(item)}
            />
          );
        })}
      </div>
    </>
  );
};
