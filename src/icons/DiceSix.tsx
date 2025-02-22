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
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle cx="96" cy="84" r="16" />
    <circle cx="160" cy="84" r="16" />
    <circle cx="96" cy="128" r="16" />
    <circle cx="160" cy="128" r="16" />
    <circle cx="96" cy="172" r="16" />
    <circle cx="160" cy="172" r="16" />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2" />
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="84" r="12" />
    <circle cx="164" cy="84" r="12" />
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <circle cx="92" cy="172" r="12" />
    <circle cx="164" cy="172" r="12" />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M192,32H64A32.1,32.1,0,0,0,32,64V192a32.1,32.1,0,0,0,32,32H192a32.1,32.1,0,0,0,32-32V64A32.1,32.1,0,0,0,192,32ZM92,184a12,12,0,1,1,12-12A12,12,0,0,1,92,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,92,96Zm72,88a12,12,0,1,1,12-12A12,12,0,0,1,164,184Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,140Zm0-44a12,12,0,1,1,12-12A12,12,0,0,1,164,96Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle cx="92" cy="84" r="10" />
    <circle cx="164" cy="84" r="10" />
    <circle cx="92" cy="128" r="10" />
    <circle cx="164" cy="128" r="10" />
    <circle cx="92" cy="172" r="10" />
    <circle cx="164" cy="172" r="10" />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle cx="92" cy="84" r="8" />
    <circle cx="164" cy="84" r="8" />
    <circle cx="92" cy="128" r="8" />
    <circle cx="164" cy="128" r="8" />
    <circle cx="92" cy="172" r="8" />
    <circle cx="164" cy="172" r="8" />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect
      x="40"
      y="40"
      width="176"
      height="176"
      rx="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="84" r="12" />
    <circle cx="164" cy="84" r="12" />
    <circle cx="92" cy="128" r="12" />
    <circle cx="164" cy="128" r="12" />
    <circle cx="92" cy="172" r="12" />
    <circle cx="164" cy="172" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DiceSix = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

DiceSix.displayName = "DiceSix";

export default DiceSix;
