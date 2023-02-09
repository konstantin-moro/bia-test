export const SENSOR_NAMES = [
  'POWER_TAG',
  'SOLAR_INVERTER',
  'SENSOR_A',
  'SENSOR_B',
  'SENSOR_C',
  'SENSOR_D',
  'SENSOR_E',
  'SENSOR_F',
];

// 86400000 is 24 hours
export const INITIAL_START_DATE = new Date(Date.now() - 86400000 * 3);

export const INITIAL_END_DATE = new Date();

export const INITIAL_FACILITY_ID = 1;

export const MIN_POWER = 4;

export const MAX_POWER = 12;
