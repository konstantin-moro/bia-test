import { type ReactElement } from 'react';

import { type TimeSeriesValue, type TimeSeriesBySensor } from '../../shared/interface';

import { useTimeSeriesStore } from '../../store';

import SearchPanel from './SearchPanel';
import SensorGroup from './SensorGroup';
import SensorValue from './SensorGroup/SensorValue';

import { calculateAverageNumber } from './util';

import './style.scss';

const Dashboard = (): ReactElement => {
  const { timeSeries } = useTimeSeriesStore();

  return (
    <div className="dashboard">
      <SearchPanel />

      {timeSeries.map(({ name, values }: TimeSeriesBySensor) => {
        const averagePower: number = calculateAverageNumber(values.map(({ value }: TimeSeriesValue) => value));

        return (
          <SensorGroup key={name} name={name} averagePower={averagePower}>
            {values.map(({ timestamp, value }: TimeSeriesValue, index: number) => {
              return <SensorValue key={timestamp.toString() + index.toString()} timestamp={timestamp} value={value} />;
            })}
          </SensorGroup>
        );
      })}
    </div>
  );
};

export default Dashboard;
