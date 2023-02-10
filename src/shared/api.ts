import { type TimeSeriesResponse, type TimeSeriesBySensor } from './interface';
import { formatTimeSeriesResponse, generateTimeSeries } from './util';

export function fetchTimeSeries(startDate: Date, endDate: Date, facilityId: number): TimeSeriesBySensor[] {
  const response: TimeSeriesResponse[] = generateTimeSeries(startDate, endDate, facilityId);

  return formatTimeSeriesResponse(response);
}
