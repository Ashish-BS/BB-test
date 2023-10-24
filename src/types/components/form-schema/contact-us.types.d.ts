import { EnquiryEnum } from '../../../enums/enquiry.enum';

export interface ContactUsType {
	fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  channel: string;
  formType: EnquiryEnum;
  projectTimeline: string;
  desiredService: (boolean | string)[];
  communicationMode: (boolean | string)[];
}


export interface IDesiredServiceProps {
  salesForm: UseFormRegister<ContactUsType>;    //It is responsible for set form field in react hook form
  other: boolean;                       // This state is changed when the other option of desiredService is cheked or unchecked
  setOther: React.Dispatch<React.SetStateAction<boolean>>;  //This is responsible for changing the value of "other" variable 
  salesFormErrors: UseFormSetError<ContactUsType>;   //This is responsible for storing the error message
  defaultUserData: any;      // This is responsible for storing the form data after submission for showing in the UI
  setSalesFormValue: UseFormSetValue<ContactUsType>;  // This is responsible for set the value of a field in the form
  clearSalesFormError: UseFormClearErrors<ContactUsType>; // This is responsible for clearing errors for the form-field
}
