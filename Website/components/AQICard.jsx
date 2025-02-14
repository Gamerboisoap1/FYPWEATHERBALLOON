import React from 'react';
import styled from 'styled-components';

const AQICard = ({ value = 0, label = 'Loading...' }) => {
  // Calculate indicator position (0-100%)
  const getIndicatorPosition = (aqi) => {
    const position = Math.min(Math.max((aqi / 500) * 100, 0), 100);
    return `${position}%`;
  };

  // Get AQI category and color
  const getAQICategory = (aqi) => {
    if (aqi <= 50) return { category: 'Good', color: '#00e400' };
    if (aqi <= 100) return { category: 'Moderate', color: '#ffff00' };
    if (aqi <= 150) return { category: 'Unhealthy for Sensitive Groups', color: '#ff7e00' };
    if (aqi <= 200) return { category: 'Unhealthy', color: '#ff0000' };
    if (aqi <= 300) return { category: 'Very Unhealthy', color: '#8f3f97' };
    return { category: 'Hazardous', color: '#7e0023' };
  };

  const { category, color } = getAQICategory(value);

  return (
    <Card>
      <Title>Air Quality Index (AQI)</Title>
      <ValueContainer>
        <ValueWrapper>
          <Value>{value}</Value>
        </ValueWrapper>
        <ScaleContainer>
          <ColorBar>
            <Indicator style={{ left: getIndicatorPosition(value) }} />
          </ColorBar>
          <Labels>
            <Label>Good</Label>
            <Label>Moderate</Label>
            <Label>USG</Label>
            <Label>Unhealthy</Label>
            <Label>Very Unhealthy</Label>
            <Label>Hazardous</Label>
          </Labels>
        </ScaleContainer>
        <CategoryLabel style={{ color }}>{category}</CategoryLabel>
      </ValueContainer>
    </Card>
  );
};

// Styled Components
const Card = styled.div`
  background: var(--card-background, linear-gradient(135deg, #1a237e, #283593));
  border-radius: 15px;
  padding: clamp(15px, 4vw, 30px);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Title = styled.h3`
  text-align: center;
  margin: 0 0 20px 0;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
`;

const ValueContainer = styled.div`
  width: 100%;
  max-width: min(600px, 90vw);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(10px, 2vw, 20px);
`;

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: clamp(8px, 1.5vw, 15px);
`;

const Value = styled.div`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
`;

const ScaleContainer = styled.div`
  width: 100%;
  padding: clamp(10px, 2vw, 15px) 0;
  position: relative;
`;

const ColorBar = styled.div`
  width: 100%;
  height: clamp(8px, 1.5vw, 12px);
  background: linear-gradient(
    to right,
    #00e400 0%,
    #00e400 16.66%,
    #ffff00 16.66%,
    #ffff00 33.33%,
    #ff7e00 33.33%,
    #ff7e00 50%,
    #ff0000 50%,
    #ff0000 66.66%,
    #8f3f97 66.66%,
    #8f3f97 83.33%,
    #7e0023 83.33%,
    #7e0023 100%
  );
  border-radius: clamp(3px, 0.8vw, 6px);
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Indicator = styled.div`
  position: absolute;
  width: clamp(2px, 0.8vw, 4px);
  height: clamp(16px, 3vw, 24px);
  background-color: white;
  bottom: -6px;
  transform: translateX(-50%);
  transition: left 0.3s ease;
  border-radius: clamp(1px, 0.4vw, 2px);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
`;

const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: clamp(5px, 1.5vw, 10px);
  flex-wrap: wrap;
  gap: 4px;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Label = styled.span`
  font-size: clamp(0.6rem, 1.5vw, 0.8rem);
  color: white;
  flex: 1;
  min-width: max-content;
  padding: 0 4px;
  text-align: center;
`;

const CategoryLabel = styled.span`
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  font-weight: 600;
  text-align: center;
  transition: color 0.3s ease;
`;

export default AQICard; 