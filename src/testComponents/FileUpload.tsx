import React from "react";
import Field from "../Formidable/Field";
import { useFieldDataContext } from "../Formidable/context";
import { FormChange } from "../Formidable/types";

interface Props {
  name: string;
  accept?: string;
  multiple?: boolean;
  className?: string;
  onAfterChange?: (data: FormChange) => void;
}

const FileUpload: React.FC<Props> = (props) => {
  const { error } = useFieldDataContext(props.name);
  const fieldProps = {
    ...props,
  };

  delete fieldProps.className;

  return (
    <div className={props.className}>
      <Field {...fieldProps} type="file" />
      {error && <p>{error}</p>}
    </div>
  );
};

export default FileUpload;
