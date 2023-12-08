import { EnquiryEnum } from '../../enums/enquiry.enum';
import * as Yup from 'yup';

//this function is responsible for checking if any string is present in the array.
export const customInputValidationTest = (value:any[]|undefined) => {
	let stringCount = 0;
	value?.some((v) => {if(v === '') v = false; if(typeof v === 'string') stringCount++});
	if(stringCount>0)
	 return true;
	else
	  return false;
	}

export const ContactUsValidationSchema = Yup.object().shape({
	fullName: Yup.string().label('Full Name').min(2).max(100).required(),
	email: Yup.string().label('E-mail').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email').required(),
	phoneNumber: Yup.string().label('Phone Number').required(),
	channel: Yup.string().label('Channel').max(500).required(),
	formType: Yup.mixed().oneOf([EnquiryEnum.HIRING, EnquiryEnum.SALES]).nullable(),
	desiredService: Yup.array().of(Yup.mixed()).test('desiredService','At least one desired service must be selected', customInputValidationTest),
	projectTimeline: Yup.string().required('Please select a one option').oneOf(['1-3 Months', '3-6 Months','6-12 Months','>1 Year','Not sure']),
	communicationMode: Yup.array().of(Yup.mixed()).test('communicationMode','At least one mode of communication must be selected', customInputValidationTest)
});