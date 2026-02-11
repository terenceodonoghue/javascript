import { Container } from '../types.js';
import { FlexProps } from './Layout.js';
import styles from './Layout.module.css';

export const flexbox = ({ column }: FlexProps) =>
  [styles.flex, column && styles['flex-col']].filter((item): item is string =>
    Boolean(item),
  );

export const spacing = (props: Container) =>
  Object.entries(props).map(([prop, value]) => styles[`${prop}-${value}`]);
