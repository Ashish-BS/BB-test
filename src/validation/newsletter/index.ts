import { EnquiryEnum } from '../../enums/enquiry.enum';
import * as Yup from 'yup';

export const NewsletterValidationSchema = Yup.object().shape({
	email: Yup.string().label('Email').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email').required(),
	formType: Yup.mixed().oneOf([EnquiryEnum.NEWSLETTER]).nullable()
});
