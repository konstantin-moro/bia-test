import { type ReactElement } from 'react';
import { TableCell, TableRow } from '@mui/material';

import { type SensorValueProps } from './interface';

const SensorValue = ({ timestamp, value }: SensorValueProps): ReactElement => {
  const userReadableTimestamp: string = new Date(timestamp).toLocaleString();

  return (
    <TableRow>
      <TableCell>{userReadableTimestamp}</TableCell>

      <TableCell>{value}</TableCell>
    </TableRow>
  );
};

export default SensorValue;
