import { Suspense } from "react";

import { ContactForm } from "./Contactform";

export default function Kontakt() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
