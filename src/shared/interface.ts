export interface TimeSeriesResponse {
  timestamp: number;
  facility_id: number;
  sensor_name: string;
  variable_name: string;
  value: number;
}

export interface TimeSeriesValue {
  timestamp: number;
  value: number;
}

export interface TimeSeriesBySensor {
  name: string;
  id: number;
  values: TimeSeriesValue[];
}
