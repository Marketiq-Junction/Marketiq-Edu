import ContactForm from "../ContactForm"; // Make sure the path is correct
import { LocationOn, Phone, Email } from "@mui/icons-material";

const Getintouch = () => {
  return (
    <section className="container mx-auto p-8 flex flex-col md:flex-row justify-between items-start mt-12 mb-8">
      {/* Contact Info Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="font-syne text-3xl font-bold">Get in Touch</h2>
        <p className="font-montserrat text-gray-700 leading-relaxed font-bold mb-8">
          We&apos;d love to hear from you! Whether you have <br /> questions about our
          services or want to discuss <br /> your digital marketing needs, feel free to
          reach <br /> out. You can contact us via email, phone, or by <br /> filling out the
          form below. Our team is ready to <br /> assist you on your journey to
          success!
        </p>
        <div className="space-y-4">
          {/* Address Link */}
          <div className="flex items-start mt-12">
            <LocationOn className="text-blue-600 mr-2" />
            <a
              href="https://www.google.com/maps?q=Off+BKC,+Mumbai,+India+400070"
              target="_blank"
              rel="noopener noreferrer"
              className="font-roboto text-gray-700 font-bold hover:text-blue-600"
            >
              Off BKC, Mumbai, India 400070
            </a>
          </div>
          
          {/* Phone Link */}
          <div className="flex items-center">
            <Phone className="text-blue-600 mr-2" />
            <a
              href="tel:+919594402916"
              className="font-montserrat text-gray-700 font-bold hover:text-blue-600"
            >
              Call us on: +91 959 440 2916
            </a>
          </div>
          
          {/* Email Link */}
          <div className="flex items-center">
            <Email className="text-blue-600 mr-2" />
            <a
              href="mailto:marketiqjunction@gmail.com"
              className="font-montserrat text-gray-700 font-bold hover:text-blue-600"
            >
              Email us on: marketiqjunction@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Drop A Line Form */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <ContactForm />
      </div>
    </section>
  );
};

export default Getintouch;
