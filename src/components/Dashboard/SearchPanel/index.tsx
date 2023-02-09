import { type ReactElement, useState, type SyntheticEvent } from 'react';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  type SelectChangeEvent,
  TextField,
} from '@mui/material';
import { ArrowBackIosNew as ArrowBackIosNewIcon, Search as SearchIcon } from '@mui/icons-material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { type Dayjs } from 'dayjs';
import clsx from 'clsx';

import { useTimeSeriesStore } from '../../../store';

import { fetchTimeSeries } from '../../../shared/api';
import { FACILITY_IDS } from './constant';

import './style.scss';

const SearchPanel = (): ReactElement => {
  const { setTimeSeries } = useTimeSeriesStore();

  const INITIAL_FACILITY_ID = FACILITY_IDS[0];

  const [facilityId, setFacilityId] = useState<string>(INITIAL_FACILITY_ID);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [isOpened, setIsOpened] = useState(false);

  function togglePanelCollapse(): void {
    setIsOpened((prevState) => !prevState);
  }

  function onChangeFacilityId(event: SelectChangeEvent): void {
    setFacilityId(event.target.value);
  }

  function onChangeStartDate(value: Dayjs | null): void {
    setStartDate(value);
  }

  function onChangeEndDate(value: Dayjs | null): void {
    setEndDate(value);
  }

  function onSubmit(event: SyntheticEvent): void {
    event.preventDefault();

    if (startDate === null || endDate === null) return;

    setTimeSeries(fetchTimeSeries(startDate.toDate(), endDate.toDate(), parseInt(facilityId)));
  }

  function onReset(): void {
    setFacilityId(INITIAL_FACILITY_ID);
    setStartDate(null);
    setEndDate(null);
  }

  return (
    <Paper className={clsx('search-panel', !isOpened && 'search-panel--collapsed')}>
      <div className="search-panel__toggler" onClick={togglePanelCollapse}>
        {isOpened ? <ArrowBackIosNewIcon fontSize="small" /> : <SearchIcon fontSize="small" />}
      </div>

      <div className="search-panel__title">Search</div>

      <form className="search-panel__form" onSubmit={onSubmit}>
        <FormControl className="search-panel__input" fullWidth>
          <InputLabel id="facility-id">Facility Id</InputLabel>

          <Select
            labelId="facility-id"
            id="facility-id"
            value={facilityId}
            label="Facility Id"
            onChange={onChangeFacilityId}
          >
            {FACILITY_IDS.map((id: string) => {
              return (
                <MenuItem key={id} value={id}>
                  {id}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <FormControl className="search-panel__input" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Start Date"
              inputFormat="MM/DD/YYYY"
              value={startDate}
              onChange={onChangeStartDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>

        <FormControl className="search-panel__input" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="End Date"
              inputFormat="MM/DD/YYYY"
              value={endDate}
              onChange={onChangeEndDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>

        <div className="search-panel__buttons">
          <Button variant="outlined" type="reset" onClick={onReset}>
            Clear
          </Button>

          <Button color="primary" variant="contained" type="submit">
            Search
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default SearchPanel;
