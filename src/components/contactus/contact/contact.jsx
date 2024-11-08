import Image from 'next/image';

const ContactPage = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#116EB3] mt-12 text-white p-6 md:p-12">
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-syne">Contact Us</h2>
          <p className="text-base md:text-lg font-montserrat ">
            We&apos;re here to help you elevate your business! Reach out to us
            today for personalized support and to learn more about our digital
            marketing solutions.
          </p>
        </div>
        <div className="w-full mt-4 md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/5.jpg"
            alt="Contact Illustration"
            width={400}
            height={400}
            className="object-contain max-w-full h-auto rounded-xl"
          />
        </div>
      </section>
    );
  };
  
  export default ContactPage;
  