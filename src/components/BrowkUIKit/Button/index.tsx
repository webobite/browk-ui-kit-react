import React, { ReactNode } from "react";
import "./Button.css";

export interface IButton {
  /**
   * Label of the button
   */
  label: string;
  /**
   * Handler for react element
   */
  onClickHandler: () => void;
  /**
   * className for button :
   *  - default
   *  - active
   *  - disabled
   *  - small
   *  - medium
   *  - large
   *  - primary
   */
  className?: string;
  /**
   * Inline styling for button
   */
  customInlineStyle?: React.CSSProperties;
}

const Button = (props: IButton) => {
  const { label, onClickHandler, className, customInlineStyle } = props;
  return (
    <button
      style={customInlineStyle}
      type="button"
      className={["ui-btn", className].join(" ")}
      onClick={onClickHandler}
    >
      <span className="ui-btn-label">{label}</span>
    </button>
  );
};

export default Button;
