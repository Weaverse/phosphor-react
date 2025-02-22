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
      d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
      opacity="0.2"
    />
    <path
      d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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
    <path d="M40,64V200h80a8,8,0,0,1,0,16H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.3a15.6,15.6,0,0,1,9.6,3.2L130.7,72H216a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V88H130.7a15.6,15.6,0,0,1-9.6-3.2L93.3,64Zm203.6,95.2a8.1,8.1,0,0,0-7-5.6l-29.8-2.3-11.5-26.5a8,8,0,0,0-14.6,0l-11.5,26.5-29.8,2.3a8.1,8.1,0,0,0-4.5,14.2l22.5,18.6-6.8,27.7a7.9,7.9,0,0,0,3,8.3,8,8,0,0,0,8.8.5L188,207.8l25.6,15.1a8.7,8.7,0,0,0,4.1,1.1,7.4,7.4,0,0,0,4.7-1.6,7.9,7.9,0,0,0,3-8.3l-6.8-27.7,22.5-18.6A8,8,0,0,0,243.6,159.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <path
      d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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
      d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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
      d="M120,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v32"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="188 198.5 217.7 216 209.6 183.4 236 161.6 201.3 158.9 188 128 174.7 158.9 140 161.6 166.4 183.4 158.3 216 188 198.5"
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

const FolderSimpleStar = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

FolderSimpleStar.displayName = "FolderSimpleStar";

export default FolderSimpleStar;
