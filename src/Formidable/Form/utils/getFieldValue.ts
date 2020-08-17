import React from "react";
import { EventType, HTMLField } from "../../types";

const getFieldValue = (e: React.ChangeEvent<HTMLField>) => {
  const eventType = e.target.type as EventType;
  const multiple = (e.target as HTMLInputElement | HTMLSelectElement).multiple;

  switch (eventType) {
    case "checkbox":
      const { checked } = e.target as HTMLInputElement;
      return checked;
    case "file":
      const { files } = e.target as HTMLInputElement;
      return multiple ? Array.from(files!) : files![0];
    case "select-one":
    case "select-multiple":
      const { selectedOptions } = e.target as HTMLSelectElement;
      const values = Array.from(selectedOptions).map((option) => option.value);
      return multiple ? values : values[0];
    default:
      return e.target.value;
  }
};

export default getFieldValue;
