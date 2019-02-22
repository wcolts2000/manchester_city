import React from "react";

const FormField = ({ id, formdata, change }) => {
  const renderTemplate = () => {
    let formTemplate = null;
    switch (formdata.element) {
      case "input":
        return (formTemplate = (
          <div>
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={e => change({ e, id })}
            />
          </div>
        ));
      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return <div>{renderTemplate()}</div>;
};

export default FormField;
