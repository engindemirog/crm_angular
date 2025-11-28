export interface IndividualCustomer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  natId: string;
  fatherName: string;
  birthDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCustomerRequest {
  firstName: string;
  lastName: string;
  email: string;
  natId: string;
  fatherName: string;
  birthDate: string;
  password: string;
  accountManagerId?: number;
}

export interface AccountManagerDropdown {
  id: number;
  fullName: string;
}

export interface ValidationError {
  detail: {
    loc: (string | number)[];
    msg: string;
    type: string;
  }[];
}

export interface CustomerListResponse {
  total: number;
  customers: IndividualCustomer[];
}
