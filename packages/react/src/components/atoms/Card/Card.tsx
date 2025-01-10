import { useTheme } from '@emotion/react';
import { ComponentPropsWithoutRef, useId } from 'react';

import Text from '../../primitives/Text/Text.js';
import View from '../../primitives/View/View.js';

interface CardProps extends ComponentPropsWithoutRef<'article'> {
  heading?: string;
}

const Card = ({ children, heading, ...props }: CardProps) => {
  const headingId = useId();
  const { border, color } = useTheme();
  return (
    <View
      as="article"
      sx={{
        borderRadius: border.radius.squared,
        backgroundColor: color.neutral.surface.elevated,
      }}
      px={1.5}
      py={2}
      aria-labelledby={headingId}
      {...props}
    >
      {heading && (
        <Text as="h2" id={headingId}>
          {heading}
        </Text>
      )}
      {children}
    </View>
  );
};

export default Card;
