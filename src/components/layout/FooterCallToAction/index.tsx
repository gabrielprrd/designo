export default function FooterCallToAction() {
  return (
    <div className="mx-10 flex w-auto translate-y-2/4 flex-col items-center gap-8 rounded-xl bg-peach bg-pattern-call-to-action bg-center px-5 py-20 text-center text-white sm:px-10 sm:text-start lg:mx-28 lg:flex-row lg:items-center lg:py-20">
      <div className="flex flex-1 flex-col gap-3 text-center lg:text-start">
        <h3 className="text-4xl">Let&apos;s talk about your project</h3>
        <p>
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <div className="flex flex-1 items-center justify-end">
        <button className="rounded-md bg-white bg-white px-4 py-4 uppercase tracking-wide text-black hover:bg-light-peach hover:text-white sm:px-5 sm:py-3">
          Get in touch
        </button>
      </div>
    </div>
  );
}
