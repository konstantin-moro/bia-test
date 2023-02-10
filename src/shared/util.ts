import { type TimeSeriesBySensor, type TimeSeriesResponse } from './interface';

import { MAX_POWER, MIN_POWER, SENSOR_NAMES } from './constant';

export function generateTimeSeries(startDate: Date, endDate: Date, facilityId: number): TimeSeriesResponse[] {
  return Array(randomIntFromInterval(100, 300))
    .fill(null)
    .map(() => {
      /* eslint-disable @typescript-eslint/naming-convention */
      const timestamp = randomTimestamp(startDate, endDate);
      const facility_id = facilityId;
      const sensor_name = SENSOR_NAMES[randomIntFromInterval(0, SENSOR_NAMES.length - 1)];
      const value = randomIntFromInterval(MIN_POWER, MAX_POWER);
      /* eslint-enable @typescript-eslint/naming-convention */

      return {
        timestamp,
        facility_id,
        sensor_name,
        value,
        variable_name: 'Power',
      };
    });
}

export function formatTimeSeriesResponse(series: TimeSeriesResponse[]): TimeSeriesBySensor[] {
  const timeSeriesBySensor: TimeSeriesBySensor[] = [];

  /* eslint-disable @typescript-eslint/naming-convention */
  series.forEach(({ facility_id, sensor_name, timestamp, value }: TimeSeriesResponse) => {
    const sensorIndex = timeSeriesBySensor.findIndex(({ name }: TimeSeriesBySensor) => name === sensor_name);
    const timeSeriesValue = { timestamp, value };

    if (sensorIndex === -1) {
      timeSeriesBySensor.push({ id: facility_id, name: sensor_name, values: [timeSeriesValue] });

      return;
    }

    timeSeriesBySensor[sensorIndex].values.push(timeSeriesValue);
  });
  /* eslint-enable @typescript-eslint/naming-convention */

  return timeSeriesBySensor.sort((a: TimeSeriesBySensor, b: TimeSeriesBySensor) => a.name.localeCompare(b.name));
}

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomTimestamp(start: Date, end: Date): number {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).getTime();
}
