import "./style.css";
import React from "react";
import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons";

function SearchInput() {
  return (
    <div className="search__input">
      <Input
        icon={<IconSearch />}
        placeholder="Новогодняя коллекция"
        radius="md"
        size="md"
      />
    </div>
  );
}

export default SearchInput;
