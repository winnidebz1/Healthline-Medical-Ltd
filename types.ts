
export interface Test {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  preparation: string;
  turnaround: string;
  whoNeedsIt: string;
}

export interface Booking {
  id: string;
  patientName: string;
  phone: string;
  testId: string;
  testName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface TestResult {
  id: string;
  testId: string;
  testName: string;
  patientId: string;
  uploadDate: string;
  fileUrl: string;
  notes: string;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  active: boolean;
}

export enum UserRole {
  PATIENT = 'PATIENT',
  ADMIN = 'ADMIN',
  TECHNICIAN = 'TECHNICIAN',
  FRONTDESK = 'FRONTDESK'
}
