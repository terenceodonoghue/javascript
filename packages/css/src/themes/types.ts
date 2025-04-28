import type * as CSS from 'csstype';

export interface Theme {
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
