import { FC } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import { Link, LinkPreviewStyle, LinkProps } from 'expo-router';

import s from './CustomLink.styles';

interface ICustomLink extends LinkProps {
  text: string;
  href: string;
  linkStyle?: LinkPreviewStyle;
  textStyle?: StyleProp<TextStyle>;
}

const CustomLink: FC<ICustomLink> = ({ text, href, linkStyle, textStyle, ...props }) => (
  <Link href={href} style={linkStyle} {...props}>
    <Text style={[s.text, textStyle]}>{text}</Text>
  </Link>
);

export default CustomLink;
