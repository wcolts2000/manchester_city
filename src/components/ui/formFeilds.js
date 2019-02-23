import React from "react";

const FormField = ({ id, formdata, change }) => {
  const showError = _ => {
    let errorMessage = (
      <div className="error_label">
        {formdata.validation && !formdata.valid
          ? formdata.validationMessage
          : null}
      </div>
    );

    return errorMessage;
  };

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
            {showError()}
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