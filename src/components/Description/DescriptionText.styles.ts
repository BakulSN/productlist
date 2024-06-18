import styled from 'styled-components';

export const DescriptionContainer = styled.div<{
  showdetails: boolean;
  height: string;
}>`
  overflow: hidden;
  transition:
    height 0.7s ease-out,
    opacity 0.7s ease-out;
  height: ${({ height }) => height};
  opacity: ${({ showdetails }) => (showdetails ? 1 : 0.5)};
`;

export const DescriptionText = styled.p`
  max-width: 100%;
`;
