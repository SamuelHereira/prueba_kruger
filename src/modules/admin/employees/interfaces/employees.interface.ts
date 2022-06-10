export interface Vehicle {
  id: number;
  driver_id: number;
  plate: string;
  model: string;
  type: string;
  capacity: string;
  creation_date: string;
}

export interface Employee {
  id: number;
  dni: string;
  name: string;
  lastname: string;
  email: string;
  birthdate: string;
  address: string;
  phone: string;
  vaccination_status: string;
  vaccinate_type: string;
  vaccination_date: string;
  dose_number: string;
}
