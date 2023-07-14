import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgProps } from "../../../common/svg";

export default function HomeIcon(props: SvgProps) {
  return (
    <Svg
      id="_x32_"
      x="0px"
      y="0px"
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox="0 0 512 512"
      opacity={1}
    >
      <Path
        d="M442.531 218L344.828 120.297 256 31.469 167.172 120.297 69.438 218.047 0 287.469 39.984 327.453 109.406 258.031 207.156 160.281 256 111.438 304.844 160.281 402.531 257.984 472.016 327.453 512 287.469z"
        fill={props.color}
      />
      <Path
        d="M85.719 330.375L85.719 480.531 274.75 480.531 274.75 361.547 343.578 361.547 343.578 480.531 426.281 480.531 426.281 330.328 256.016 160.063z"
        fill={props.color}
      />
    </Svg>
  );
}
