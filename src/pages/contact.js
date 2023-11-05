import * as React from "react";
import Seo from "#lib/Seo/Seo";

import ContactRoute from "#routes/ContactRoute/ContactRoute";

const ContactPage = () => <ContactRoute />;

export const Head = () => {
  return (
    <Seo
      title={"Get in touch with me"}
      description="Looking for a coder, designer, software engineer, and/or UX designer in Scranton, PA? Look no further! My name is Frank Luongo and I can help you with any project, large or small."
    />
  );
};
export default ContactPage;
