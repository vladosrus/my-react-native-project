import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

export const ProfileIcon = (props: SvgProps) => (
  <Svg width={72} height={72} fill="none" {...props}>
    <Path
      stroke="#AFB2BF"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M56.642 63.75c-.557-10.12-3.656-17.5-20.892-17.5-17.237 0-20.335 7.38-20.892 17.5"
    />
    <Circle cx={35.75} cy={35.75} r={35} stroke="#AFB2BF" strokeWidth={1.5} />
    <Circle cx={35.75} cy={25.25} r={10.5} stroke="#AFB2BF" strokeWidth={1.5} />
  </Svg>
);
