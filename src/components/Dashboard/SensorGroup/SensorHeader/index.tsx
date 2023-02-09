import { type ReactElement } from 'react';
import { CircularProgress, type CircularProgressProps } from '@mui/material';

import { type HeaderProps } from './interface';

import Paper from '@mui/material/Paper/Paper';

import { PROGRESS_SIZE } from './constant';
import { MAX_POWER } from '../../../../shared/constant';
import { formatName, getProgressColor } from './util';

import './style.scss';

const SensorHeader = ({ name, averagePower }: HeaderProps): ReactElement => {
  const userReadableName: string = formatName(name);
  const powerPercentage: number = Math.round((averagePower / MAX_POWER) * 100);
  const progressColor: CircularProgressProps['color'] = getProgressColor(powerPercentage);

  return (
    <Paper className="sensor-header">
      <div className="sensor-header__name">{userReadableName}</div>

      <div className="sensor-header__average">
        <div className="sensor-header__spinner-container" style={{ height: `${PROGRESS_SIZE}px` }}>
          <CircularProgress size={PROGRESS_SIZE} variant="determinate" value={powerPercentage} color={progressColor} />

          <div className="sensor-header__spinner-value">{averagePower}</div>
        </div>
      </div>
    </Paper>
  );
};

export default SensorHeader;
