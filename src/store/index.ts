import { createContext, useContext } from 'react';

import { type TimeSeriesBySensor } from '../shared/interface';

export interface TimeSeriesContextProps {
  timeSeries: TimeSeriesBySensor[];
  setTimeSeries: (timeSeries: TimeSeriesBySensor[]) => void;
}

export const TimeSeriesContext = createContext<TimeSeriesContextProps>({
  timeSeries: [],
  setTimeSeries: () => {},
});

export const useTimeSeriesStore = (): TimeSeriesContextProps => useContext(TimeSeriesContext);
