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
    watch,
    reset: resetFormValues,
  } = createContactForm;

  const watchName = watch("name");
  const watchEmail = watch("email");
  const watchPhone = watch("phone");
  const watchMessage = watch("message");

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
            <p className="text-4xl font-medium tracking-wide text-white">
              Contact Us
            </p>
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
              <Form.Field className="relative flex h-[20px] w-full">
                <Form.Input
                  name="name"
                  className="absolute left-0 w-full border-b pr-32 focus:border-b-2"
                />
                <Form.Label
                  htmlFor="name"
                  className={`absolute left-2 top-1/3 opacity-60 ${
                    watchName ? "hidden" : "block"
                  }`}
                >
                  Name
                </Form.Label>
                <Form.ErrorMessage
                  field="name"
                  className="absolute right-2 top-1/2 pl-1"
                />
              </Form.Field>

              <Form.Field className="relative flex h-[20px] w-full">
                <Form.Input
                  name="email"
                  className="absolute left-0 w-full border-b pr-32 focus:border-b-2"
                />
                <Form.Label
                  htmlFor="email"
                  className={`absolute left-2 top-1/3 opacity-60 ${
                    watchEmail ? "hidden" : "block"
                  }`}
                >
                  Email
                </Form.Label>
                <Form.ErrorMessage
                  field="email"
                  className="absolute right-2 top-1/2 pl-1"
                />
              </Form.Field>

              <Form.Field className="relative flex h-[20px] w-full">
                <Form.Input
                  name="phone"
                  className="absolute left-0 w-full border-b pr-32 focus:border-b-2"
                />
                <Form.Label
                  htmlFor="phone"
                  className={`absolute left-2 top-1/3 opacity-60 ${
                    watchPhone ? "hidden" : "block"
                  }`}
                >
                  Phone
                </Form.Label>
                <Form.ErrorMessage
                  field="phone"
                  className="absolute right-2 top-1/2 pl-1"
                />
              </Form.Field>

              <Form.Field className="relative flex h-[20px] w-full">
                <Form.TextArea
                  name="message"
                  className="absolute left-0 w-full border-b pr-32 focus:border-b-2"
                />
                <Form.Label
                  htmlFor="message"
                  className={`absolute left-2 top-1/3 opacity-60 ${
                    watchMessage ? "hidden" : "block"
                  }`}
                >
                  Your Message
                </Form.Label>
                <Form.ErrorMessage
                  field="message"
                  className="absolute right-2 top-1/2 pl-1"
                />
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
