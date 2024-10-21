export interface PatientApiData {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: {
        value: number;
        levels: string;
      };
      diastolic: {
        value: number;
        levels: string;
      };
    };
    heart_rate: {
      value: number;
      levels: string;
    };
    respiratory_rate: {
      value: number;
      levels: string;
    };
    temperature: {
      value: number;
      levels: string;
    };
  }[];

  diagnostic_list: {
    name: string;
    description: string;
    status: string;
  }[];
  lab_results: string[];
}
export interface PatientsData {
  patients: PatientApiData[];
}

export interface DiagnosisListProps {
  diagnosis: {
    name: string;
    description: string;
    status: string;
  }[];
}

export interface DiagnosisHistory {
  data: {
    month: string;
    year: number;
    blood_pressure: {
      systolic: {
        value: number;
        levels: string;
      };
      diastolic: {
        value: number;
        levels: string;
      };
    };
    heart_rate: {
      value: number;
      levels: string;
    };
    respiratory_rate: {
      value: number;
      levels: string;
    };
    temperature: {
      value: number;
      levels: string;
    };
  }[];
}

export interface LabResultProps {
  labResults: string[];
}

export interface ResultCardProps {
  result: string;
}

export interface PatientDetails {
  details: {
    name: string;
    gender: string;
    profile_picture: string;
    date_of_birth: string;
    phone_number: string;
    emergency_contact: string;
    insurance_type: string;
  };
}

export interface PatientCardProps {
  patient: PatientApiData;
}
