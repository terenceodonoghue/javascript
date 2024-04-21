import type * as CSS from 'csstype';

export interface Theme {
  border: {
    radius: {
      small: CSS.Properties['borderRadius'];
    };
  };
  color: {
    neutral: {
      surface: {
        backdrop: CSS.Properties['color'];
        elevated: CSS.Properties['color'];
      };
    };
  };
  font: {
    family: CSS.Properties['fontFamily'];
  };
}
