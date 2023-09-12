import Head from "next/head";
import type { ReactElement } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import LocationsCtaSection from "@/components/LocationsCtaSection";
import LayoutWithoutCta from "@/components/layout/LayoutWithoutCta";
import { Form } from "@/components/Form";
import useBreakpoint from "@/hooks/useBreakpoint";
import type { CreateContactData } from "@/models/contactForm";
import { contactFormSchema } from "@/models/contactForm";
import "react-toastify/dist/ReactToastify.css";
import VisuallyHidden from "@/components/VisuallyHidden";

Contact.getLayout = function (page: ReactElement) {
  return <LayoutWithoutCta>{page}</LayoutWithoutCta>;
};

export default function Contact() {
  const { isSm } = useBreakpoint();
  const createContactForm = useForm<CreateContactData>({
    resolver: zodResolver(contactFormSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset: resetFormValues,
  } = createContactForm;

  const displaySuccessToast = () => toast("This is a fake success message");

  function sendEmail() {
    displaySuccessToast();
    resetFormValues();
  }

  return (
    <>
      <Head>
        <title>Contact us - Designo</title>
        <meta
          name="About"
          content="Frontend Mentor | Designo Agency Website Challenge"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="align-center max-w-screen flex h-full flex-col justify-center gap-28 md:px-14 lg:px-28">
        <section
          id="contact-us"
          className={`flex flex-col bg-peach ${
            isSm ? "bg-pattern-two-circles" : "bg-hero-pattern-home"
          } gap-4 bg-contain bg-no-repeat px-4 py-12 sm:rounded-xl md:gap-20 md:px-20 lg:flex-row`}
        >
          <div className="flex w-full flex-col items-center justify-center gap-4 bg-left py-4 text-center sm:items-start sm:text-start">
            <h1 className="text-4xl font-medium tracking-wide text-white">
              Contact Us
            </h1>
            <p className="tracking-wide text-white">
              Ready to take it to the next level? Let&apos;s talk about your
              project or idea and find out how we can help your business grow.
              If you are looking for unique digital experiences that&apos;s
              relatable to your users, drop us a line.
            </p>
          </div>
          <FormProvider {...createContactForm}>
            <form
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(sendEmail)}
              className="flex w-full flex-col items-center justify-center gap-10"
            >
              <Form.Field>
                <VisuallyHidden>
                  <Form.Label htmlFor="name">Name</Form.Label>
                </VisuallyHidden>
                <Form.Input name="name" placeholder="Name" />
                <Form.ErrorMessage field="name" />
              </Form.Field>

              <Form.Field>
                <VisuallyHidden>
                  <Form.Label htmlFor="email">Email</Form.Label>
                </VisuallyHidden>
                <Form.Input name="email" placeholder="Email" />
                <Form.ErrorMessage field="email" />
              </Form.Field>

              <Form.Field>
                <VisuallyHidden>
                  <Form.Label htmlFor="phone">Phone</Form.Label>
                </VisuallyHidden>
                <Form.Input name="phone" placeholder="Phone" />
                <Form.ErrorMessage field="phone" />
              </Form.Field>

              <Form.Field>
                <VisuallyHidden>
                  <Form.Label htmlFor="message">Message</Form.Label>
                </VisuallyHidden>
                <Form.TextArea name="message" placeholder="Your message" />
                <Form.ErrorMessage field="message" />
              </Form.Field>
              <button
                type="submit"
                className="mt-8 rounded-md bg-white px-4 py-4 uppercase tracking-wide text-black hover:bg-light-peach hover:text-white sm:px-10 sm:py-3 md:self-end"
              >
                {isSubmitting ? "Sending" : "Submit"}
              </button>
            </form>
          </FormProvider>
        </section>

        <LocationsCtaSection />
      </div>
      <ToastContainer hideProgressBar theme="light" />
    </>
  );
}
