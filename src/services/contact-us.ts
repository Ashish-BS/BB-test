import { NewsletterType } from "@/types/components/form-schema/newsletter.types";
import { ContactUsType } from "@/types/components/form-schema/contact-us.types";
import { fetchPost } from "./service-clients";

export const postContactFormDetails = async (data: ContactUsType) => {
  return await fetchPost(
    `${process.env.NEXT_PUBLIC_INQUIRY_API_URL}/add-details`,
    data
  );
};

export const subscribeToNewsletter = async (data: NewsletterType) => {
  return await fetchPost(
    `${process.env.NEXT_PUBLIC_INQUIRY_API_URL}/add-details`,
    data
  );
};
