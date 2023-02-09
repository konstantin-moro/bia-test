import { type ReactElement } from 'react';
import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import SensorHeader from './SensorHeader';

import { type SensorGroupProps } from './interface';

import './style.scss';

const SensorGroup = ({ averagePower, name, children }: SensorGroupProps): ReactElement => {
  return (
    <div className="sensor-values">
      <SensorHeader averagePower={averagePower} name={name} />

      <Paper className="sensor-values__table-container">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Timestamp</TableCell>
              <TableCell>Power</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>{children}</TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default SensorGroup;
