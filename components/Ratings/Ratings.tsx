import React from 'react';
import { RatingsProps } from './RatingsTypes';
import {
  RatingsWrapper,
} from './Ratings.styles';

export const Ratings: React.FC<RatingsProps> = ({
  children,
  ...props
}) => {
  return (
    <RatingsWrapper {...props}>
      {children}
    </RatingsWrapper>
  );
};
