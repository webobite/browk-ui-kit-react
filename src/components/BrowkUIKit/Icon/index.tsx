import React from "react";
import iconPath from "../../../assets/images/icons/IconLib";

interface IIcon {
  /**
   * Size of Icons (Width and Height) in px
   */
  size?: string | undefined;
  /**
   * With Size properties respective units in css
   *  for ex : icon width and height 
   *      width : 2px
   *      height: 2px
   */
  // unit: "px" | "em" | "pt" | "pc" | "em" | undefined;
  /**
   * ViewBox properties of the svg Icon
   *  for example : 
   *      viewBox="0 0 16 16"
   */
  viewBox: string | undefined;
  /**
   * Color of Icon
   */
  color: string | undefined;
  /**
   * Predefined Icons in provided in libs
   *    More icon support will be added in future
   */
  icon: "loader_xs" | "checked_xs";
  /**
   * custom style with className
   */
  className: string | undefined;
  /**
   * Custom inline styles to Icon Component
   */
  style: React.CSSProperties;
}

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };

const Icon = (props: IIcon) => {
  const { size, viewBox, color, icon, className, style } = props;
  const styles = { ...defaultStyles, ...style };

  console.log(">>>>>>",props);
  
  return (
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill={color} d={iconPath[icon]} />
    </svg>
  );
};

export default Icon;
