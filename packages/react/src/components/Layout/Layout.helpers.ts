import type { Container } from '../types';
import type { FlexProps } from './Layout';
import styles from './Layout.module.css';

export const flexbox = ({ column }: FlexProps) =>
  [styles.flex, column && styles['flex-col']].filter((item): item is string =>
    Boolean(item),
  );

export const spacing = (props: Container) =>
  Object.entries(props).map(([prop, value]) => styles[`${prop}-${value}`]);
