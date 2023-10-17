import { EnquiryEnum } from '../../../enums/enquiry.enum';

export interface ContactUsType {
	fullName:string
	email: string;
	phoneNumber: string;
	message: string;
	channel: string;
	formType: EnquiryEnum;
}
