import React, { ReactNode } from "react";
import "./Button.css";

export interface IButton {
  /**
   * Children Node
   *  for icon
   */
  children?: ReactNode;
  /**
   * Label of the button
   */
  label?: string;
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
   *  - with-icon
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
      {props.children}
      {label !== undefined ? (
        <span className="ui-btn-label">{label}</span>
      ) : null}
    </button>
  );
};

export default Button;
