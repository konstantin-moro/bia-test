import { type ReactElement, useState, useEffect } from 'react';
import { CssBaseline } from '@mui/material';

import { type TimeSeriesBySensor } from './shared/interface';

import { TimeSeriesContext } from './store';

import Dashboard from './components/Dashboard';

import { fetchTimeSeries } from './shared/api';
import { INITIAL_END_DATE, INITIAL_FACILITY_ID } from './shared/constant';

const App = (): ReactElement => {
  const [timeSeries, setTimeSeries] = useState<TimeSeriesBySensor[]>([]);

  const providerValue = { timeSeries, setTimeSeries };

  useEffect(() => {
    setTimeSeries(fetchTimeSeries(INITIAL_END_DATE, INITIAL_END_DATE, INITIAL_FACILITY_ID));
  }, []);

  return (
    <>
      <CssBaseline />

      <TimeSeriesContext.Provider value={providerValue}>
        <Dashboard />
      </TimeSeriesContext.Provider>
    </>
  );
};

export default App;
