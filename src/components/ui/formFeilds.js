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
            {formdata.showlabel ? (
              <div className="label_inputs">{formdata.config.label}</div>
            ) : null}
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={e => change({ e, id })}
            />
            {showError()}
          </div>
        ));
      case "select":
        return (formTemplate = (
          <div>
            {formdata.showlabel ? (
              <div className="label_inputs">{formdata.config.label}</div>
            ) : null}
            <select value={formdata.value} onChange={e => change({ e, id })}>
              <option value="">Select one</option>
              {formdata.config.options.map(item => (
                <option key={item.key} value={item.key}>
                  {item.value}
                </option>
              ))}
            </select>
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
