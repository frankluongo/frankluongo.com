import { useState } from "react";
export default function useContactForm() {
  const [result, setResult] = useState(null);
  return { result, submitForm };

  async function submitForm(event) {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (!response.ok) throw new Error("Network response was not ok.");
      setResult("Message sent successfully!");
    } catch (error) {
      setResult(
        "Oh no! An error occurred while submitting the form. Please try again later"
      );
      console.log(error);
      console.error(error);
    }
  }
}
