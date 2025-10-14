"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the duration of the Digital Marketing course?",
      answer:
        "The complete Digital Marketing course is 6 months long, which includes 4 months of intensive training covering all major digital marketing channels and 2 months of hands-on internship with real client projects. This comprehensive program ensures you gain both theoretical knowledge and practical campaign management skills.",
    },
    {
      question: "Do I need any prior marketing experience?",
      answer:
        "No prior marketing experience is required. Our course is designed for complete beginners and starts with digital marketing fundamentals. However, basic computer skills and familiarity with social media platforms will be beneficial. We cover everything from basics to advanced campaign strategies.",
    },
    {
      question: "What certifications will I receive?",
      answer:
        "You'll receive our industry-recognized Digital Marketing Mastery certificate upon completion. Additionally, we prepare you for official certifications including Google Ads, Google Analytics, Facebook Blueprint, and HubSpot certifications. These globally recognized credentials significantly boost your career prospects.",
    },
    {
      question: "Will I work on real marketing campaigns?",
      answer:
        "Yes! You'll work on 40+ real-world marketing campaigns including social media ads, Google Ads, SEO projects, email marketing, and content marketing. During the internship phase, you'll manage actual client campaigns, giving you valuable hands-on experience and portfolio pieces.",
    },
    {
      question: "Which tools and platforms will I learn?",
      answer:
        "You'll master 15+ industry-leading tools including Google Ads, Facebook Ads Manager, Google Analytics, SEMrush, Ahrefs, HubSpot, Mailchimp, Canva, WordPress, Hootsuite, and more. We focus on tools that are currently in high demand in the digital marketing industry.",
    },
    {
      question: "What is the job placement assistance provided?",
      answer:
        "We provide comprehensive placement assistance including resume building, portfolio creation, LinkedIn optimization, interview preparation, and direct referrals to hiring companies. Our placement team connects you with opportunities in digital marketing agencies, e-commerce companies, startups, and corporate marketing departments.",
    },
    {
      question: "Can I start my own digital marketing agency after this course?",
      answer:
        "Absolutely! The course covers everything you need to start your own agency including client acquisition strategies, campaign management, pricing models, client communication, and reporting. Many of our students have successfully launched their own freelance careers or marketing agencies.",
    },
    {
      question: "Are the classes live or recorded?",
      answer:
        "We offer live interactive sessions with industry experts and successful digital marketers. All sessions are recorded and available for lifetime access. We also provide weekly doubt-clearing sessions, one-on-one mentorship, and project guidance to ensure your success.",
    },
    {
      question: "What is the typical salary for a digital marketing professional?",
      answer:
        "Entry-level digital marketing professionals earn between ₹3-5 LPA. With 2-3 years of experience, salaries range from ₹6-10 LPA. Senior digital marketers and team leads can earn ₹15 LPA or more. Freelancers and agency owners often earn significantly higher based on their client base.",
    },
    {
      question: "How is this course different from free online tutorials?",
      answer:
        "While free tutorials provide basic knowledge, our course offers structured learning with live projects, industry mentorship, hands-on practice on real ad accounts, official certifications, portfolio building, and guaranteed placement assistance. You'll also get access to premium tools and personalized career guidance.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-800 dark:via-cyan-900/20 dark:to-gray-800">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
          >
            <FaQuestionCircle className="text-4xl text-blue-600 dark:text-blue-400" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
              Questions
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Find answers to common questions about our Digital Marketing course
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group"
              >
                <div className="flex items-start gap-4 flex-1">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg flex items-center justify-center text-sm font-bold text-blue-600 dark:text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Question Text */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-cyan-500 group-hover:to-teal-500 transition-all duration-300">
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <motion.div
                  className="flex-shrink-0 ml-4 w-8 h-8 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-lg flex items-center justify-center text-white"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-12">
                        <motion.p
                          className="text-gray-600 dark:text-gray-300 leading-relaxed border-l-4 border-gradient-to-b from-blue-500 to-teal-500 pl-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Gradient Line (visible when expanded) */}
              {activeIndex === index && (
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6">
              {"Can't find the answer you're looking for? Our team is here to help you start your digital marketing journey!"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/9594402822?text=Hey%20I%20have%20some%20questions%20about%20the%20Digital%20Marketing%20course"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us on WhatsApp
              </motion.a>
              <motion.a
                href="tel:+919594402822"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold text-lg rounded-xl shadow-lg hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us Now
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Additional Help Section */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-3">📧</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Email Support</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get detailed answers via email</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-3">💬</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Live Chat</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Chat with our counselors</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-md border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-3">📞</div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Phone Support</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Talk to our experts directly</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;