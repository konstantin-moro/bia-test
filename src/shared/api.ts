import { type TimeSeriesResponse, type TimeSeriesBySensor } from './interface';
import { formatTimeSeries, generateTimeSeries } from './util';

export function fetchTimeSeries(startDate: Date, endDate: Date, facilityId: number): TimeSeriesBySensor[] {
  const response: TimeSeriesResponse[] = generateTimeSeries(startDate, endDate, facilityId);

  return formatTimeSeries(response);
}
