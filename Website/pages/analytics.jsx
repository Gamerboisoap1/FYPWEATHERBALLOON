import React from 'react';
import AQICard from '../components/AQICard';

const AnalyticsPage = () => {
  // Example usage with real-time data
  const [aqiData, setAqiData] = React.useState({
    value: 75,
    label: 'Moderate'
  });

  // You can update the AQI value with real data
  // Example with WebSocket or API polling:
  React.useEffect(() => {
    // Your data fetching logic here
    const updateAQI = () => {
      // Example: fetch new data and update state
      // setAqiData(newData);
    };

    const interval = setInterval(updateAQI, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="section-content">
      <AQICard value={aqiData.value} label={aqiData.label} />
    </div>
  );
};

export default AnalyticsPage; 