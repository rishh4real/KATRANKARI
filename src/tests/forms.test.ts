import { describe, expect, it } from "vitest";
import { validateContactForm, validateCorporateForm } from "@/lib/forms";

describe("form validation", () => {
  it("rejects incomplete contact details", () => {
    expect(validateContactForm({ name: "", email: "bad", message: "short" })).toEqual({
      name: "Enter your name.",
      email: "Enter a valid email address.",
      message: "Please add at least 10 characters.",
    });
  });

  it("accepts a complete corporate enquiry", () => {
    const errors = validateCorporateForm({ name: "Asha", company: "Example Co", email: "asha@example.com", phone: "+91 98765 43210", quantity: "50", interest: "Bags and totes", customisation: "Logo tag", message: "Please share available options." });
    expect(errors).toEqual({});
  });
});
