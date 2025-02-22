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
    <circle
      cx="40"
      cy="200"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="96"
      cy="96"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="160"
      cy="160"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <circle
      cx="216"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="84.6"
      y1="117.1"
      x2="51.4"
      y2="178.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="143"
      y1="143"
      x2="113"
      y2="113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="204.6"
      y1="77.1"
      x2="171.4"
      y2="138.9"
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
    <circle cx="40" cy="200" r="24" opacity="0.2" />
    <circle cx="96" cy="96" r="24" opacity="0.2" />
    <circle cx="160" cy="160" r="24" opacity="0.2" />
    <circle cx="216" cy="56" r="24" opacity="0.2" />
    <circle
      cx="40"
      cy="200"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="96"
      cy="96"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="160"
      cy="160"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="216"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="84.6"
      y1="117.1"
      x2="51.4"
      y2="178.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="143"
      y1="143"
      x2="113"
      y2="113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="204.6"
      y1="77.1"
      x2="171.4"
      y2="138.9"
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
    <path d="M238.6,78.6A31.6,31.6,0,0,1,216,88a32.2,32.2,0,0,1-7.6-.9l-26.7,49.4.9.9a31.9,31.9,0,0,1,0,45.2,31.9,31.9,0,0,1-45.2,0,32,32,0,0,1-5-38.9l-20.1-20.1A32.7,32.7,0,0,1,96,128a32.2,32.2,0,0,1-7.6-.9L61.7,176.5l.9.9a31.9,31.9,0,0,1,0,45.2,31.9,31.9,0,0,1-45.2,0,31.9,31.9,0,0,1,0-45.2h0a32.1,32.1,0,0,1,30.2-8.5l26.7-49.4-.9-.9a31.9,31.9,0,0,1,0-45.2h0a32,32,0,0,1,50.2,38.9l20.1,20.1a32.4,32.4,0,0,1,23.9-3.5l26.7-49.4-.9-.9a31.9,31.9,0,0,1,0-45.2h0a32,32,0,0,1,45.2,45.2Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="40"
      cy="200"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="96"
      cy="96"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="160"
      cy="160"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <circle
      cx="216"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="84.6"
      y1="117.1"
      x2="51.4"
      y2="178.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="143"
      y1="143"
      x2="113"
      y2="113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="204.6"
      y1="77.1"
      x2="171.4"
      y2="138.9"
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
    <circle
      cx="40"
      cy="200"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="96"
      cy="96"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="160"
      cy="160"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <circle
      cx="216"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="84.6"
      y1="117.1"
      x2="51.4"
      y2="178.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="143"
      y1="143"
      x2="113"
      y2="113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="204.6"
      y1="77.1"
      x2="171.4"
      y2="138.9"
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
    <circle
      cx="40"
      cy="200"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="96"
      cy="96"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="160"
      cy="160"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="216"
      cy="56"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="84.6"
      y1="117.1"
      x2="51.4"
      y2="178.9"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="143"
      y1="143"
      x2="113"
      y2="113"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="204.6"
      y1="77.1"
      x2="171.4"
      y2="138.9"
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

const LineSegments = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

LineSegments.displayName = "LineSegments";

export default LineSegments;
