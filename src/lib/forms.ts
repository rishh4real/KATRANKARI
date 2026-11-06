export type FormErrors<T extends string> = Partial<Record<T, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: Record<"name" | "email" | "message", string>) {
  const errors: FormErrors<keyof typeof values> = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (!emailPattern.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Please add at least 10 characters.";
  return errors;
}

export function validateCorporateForm(
  values: Record<"name" | "company" | "email" | "phone" | "quantity" | "interest" | "customisation" | "message", string>,
) {
  const errors: FormErrors<keyof typeof values> = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (values.company.trim().length < 2) errors.company = "Enter your organisation.";
  if (!emailPattern.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.phone && !/^[+\d][\d\s-]{7,14}$/.test(values.phone.trim())) errors.phone = "Enter a valid phone number.";
  const quantity = Number(values.quantity);
  if (!Number.isInteger(quantity) || quantity < 1) errors.quantity = "Enter an estimated quantity.";
  if (!values.interest) errors.interest = "Select a product interest.";
  if (values.message.trim().length < 10) errors.message = "Please add at least 10 characters.";
  return errors;
}
