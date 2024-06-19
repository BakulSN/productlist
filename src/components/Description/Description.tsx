import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MAX_LENGTH_DESCRIPTION } from '../../constants/api.constants';
import {
  DescriptionContainer,
  DescriptionText,
} from './DescriptionText.styles';
import { StyleSheetManager } from 'styled-components';
import { DescriptionProps } from '../../models/state/product-state.model';

const Description = ({
  text,
  maxLength = MAX_LENGTH_DESCRIPTION,
}: DescriptionProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [height, setHeight] = useState('100px');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (showDetails) {
        setHeight(`${contentRef.current.scrollHeight}px`);
      } else {
        setHeight('100px');
      }
    }
  }, [showDetails, text]);

  const descriptionText = useMemo(() => {
    if (text.length > maxLength && !showDetails) {
      return text.slice(0, maxLength).trim() + '...';
    } else {
      return text.trim();
    }
  }, [text, maxLength, showDetails]);

  const toggleDetails = useCallback(() => {
    setShowDetails(!showDetails);
  }, [showDetails]);

  return (
    <>
      <StyleSheetManager shouldForwardProp={(props) => props !== 'showdetails'}>
        <DescriptionContainer
          showdetails={showDetails}
          height={height}
          ref={contentRef}
        >
          <DescriptionText>{descriptionText}</DescriptionText>
        </DescriptionContainer>
      </StyleSheetManager>
      {text.length > maxLength && (
        <button onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      )}
    </>
  );
};

export default memo(Description);
