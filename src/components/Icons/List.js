import React from "react";
import { PropTypes } from "prop-types";

import { smallLarge } from "./iconConstants";

const listIcons = {
  small: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="13"
      viewBox="0 0 20 13"
    >
      {children}
      <path
        fill={color}
        fillOpacity=".5"
        fillRule="evenodd"
        d="M19.502 12.002h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm0-5h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm0-5h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm-17.998.996a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 1.505C0 1.087.146.732.44.439A1.45 1.45 0 0 1 1.503 0c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147zm0 7.002a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 6.505c0-.417.146-.772.44-1.065A1.45 1.45 0 0 1 1.503 5c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147zm0 7.002a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 11.505c0-.417.146-.772.44-1.065A1.45 1.45 0 0 1 1.503 10c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147z"
      />
    </svg>
  ),
  large: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="17"
      viewBox="0 0 24 17"
    >
      {children}
      <path
        fill={color}
        fillOpacity=".5"
        fillRule="evenodd"
        d="M19.502 12.002h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm0-5h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm0-5h-15a.48.48 0 0 1-.352-.147.48.48 0 0 1-.146-.351c0-.143.049-.264.146-.361a.48.48 0 0 1 .352-.147h15a.48.48 0 0 1 .352.147.491.491 0 0 1 .146.36.48.48 0 0 1-.146.352.48.48 0 0 1-.352.147zm-17.998.996a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 1.505C0 1.087.146.732.44.439A1.45 1.45 0 0 1 1.503 0c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147zm0 7.002a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 6.505c0-.417.146-.772.44-1.065A1.45 1.45 0 0 1 1.503 5c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147zm0 7.002a1.45 1.45 0 0 1-1.065-.44A1.438 1.438 0 0 1 0 11.505c0-.417.146-.772.44-1.065A1.45 1.45 0 0 1 1.503 10c.41 0 .762.146 1.055.44.293.292.439.647.439 1.064 0 .41-.146.762-.44 1.055-.292.293-.644.439-1.054.439zm0-2.002a.491.491 0 0 0-.361.147.491.491 0 0 0-.147.36.48.48 0 0 0 .147.352.491.491 0 0 0 .36.147.48.48 0 0 0 .352-.147.48.48 0 0 0 .147-.351.491.491 0 0 0-.147-.361.48.48 0 0 0-.351-.147z"
      />
    </svg>
  )
};

const ListIcon = ({ size, color, children, ...props }) =>
  listIcons[size](color, children, props);

ListIcon.displayName = "ListIcon";

ListIcon.propTypes = {
  size: PropTypes.oneOf(smallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

ListIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: "currentColor"
};

export default ListIcon;
