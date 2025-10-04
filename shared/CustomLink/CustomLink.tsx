import { FC } from 'react';
import { LinkPreviewProps } from 'expo-router';
import { Link, LinkPreviewStyle } from 'expo-router';
import { StyleProp, Text, TextStyle } from 'react-native';

import s from './CustomLink.styles';

type CustomLinkProps = LinkPreviewProps & {
  text: string;
  href: string;
  linkStyle?: LinkPreviewStyle;
  textStyle?: StyleProp<TextStyle>;
};

const CustomLink: FC<CustomLinkProps> = ({ text, href, linkStyle, textStyle, ...props }) => (
  <Link href={href} style={linkStyle} {...props}>
    <Text style={[s.text, textStyle]}>{text}</Text>
  </Link>
);

export default CustomLink;
