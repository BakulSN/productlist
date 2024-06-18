import { useEffect, useRef, useState } from 'react';
import { MAX_LENGTH_DESCRIPTION } from '../../constants/api.constants';
import {
  DescriptionContainer,
  DescriptionText,
} from './DescriptionText.styles';
import { StyleSheetManager } from 'styled-components';

interface DescriptionProps {
  text: string;
  maxLength?: number;
}

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

  const descriptionText =
    text.length > maxLength && !showDetails
      ? text.slice(0, maxLength).trim() + '...'
      : text.trim();

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

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

export default Description;
