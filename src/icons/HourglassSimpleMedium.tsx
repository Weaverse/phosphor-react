/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <path
      d="M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="80"
      x2="80"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <polygon points="128 128 176 80 80 80 128 128" opacity="0.2" />
    <path
      d="M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="80"
      x2="80"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M139.3,128l34.4-34.3h0L208,59.3A16,16,0,0,0,196.7,32H59.3A16,16,0,0,0,48,59.3L116.7,128,48,196.7A16,16,0,0,0,59.3,224H196.7A16,16,0,0,0,208,196.7Zm57.4-80-24,24H83.3l-24-24ZM59.3,208,120,147.3V168a8,8,0,0,0,16,0V147.3L196.7,208Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="176"
      y1="80"
      x2="80"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <path
      d="M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="176"
      y1="80"
      x2="80"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path
      d="M59.3,40H196.7a8,8,0,0,1,5.6,13.7L128,128,53.7,53.7A8,8,0,0,1,59.3,40Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M59.3,216H196.7a8,8,0,0,0,5.6-13.7L128,128,53.7,202.3A8,8,0,0,0,59.3,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="80"
      x2="80"
      y2="80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const HourglassSimpleMedium = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => <IconBase ref={ref} {...props} renderPath={renderPath} />
);

HourglassSimpleMedium.displayName = "HourglassSimpleMedium";

export default HourglassSimpleMedium;
