import * as React from "react";
import { Seo } from "#base/Seo";
import ContactSlice from "#v6/components/slices/ContactSlice/ContactSlice";
const ContactPage = () => <ContactSlice />;
export const Head = () => {
  return (
    <Seo
      title={"Get in touch with me"}
      description="Looking for a coder, designer, software engineer, and/or UX designer in Scranton, PA? Look no further! My name is Frank Luongo and I can help you with any project, large or small."
    />
  );
};
export default ContactPage;
