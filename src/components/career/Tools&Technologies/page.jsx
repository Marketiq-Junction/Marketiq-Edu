"use client";
import React from "react";
import { motion } from "framer-motion";

const ToolsTechnologies = () => {
  const tools = [
    {
      name: "Google Ads",
      color: "text-blue-600",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12.89 10.109L8.65 2.538c-.697-1.255-2.513-1.255-3.21 0L.548 13.196C-.149 14.45.686 16 2.08 16h4.845l-.004.01 1.305 2.329c.697 1.255 2.512 1.255 3.21 0l4.892-8.73h-3.448z"/>
          <path d="M23.452 13.196L18.56 4.465c-.697-1.255-2.512-1.255-3.21 0l-2.122 3.786 3.21 5.729h4.932c1.394 0 2.23-1.55 1.532-2.804z"/>
        </svg>
      ),
    },
    {
      name: "Facebook",
      color: "text-blue-700",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: "Instagram",
      color: "text-pink-600",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      color: "text-blue-800",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "Google Analytics",
      color: "text-orange-500",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M22.84 2.9982v17.9987c.0086 1.6473-1.3197 2.9897-2.967 2.9984a2.9808 2.9808 0 01-.3677-.0208c-1.528-.226-2.6477-1.5558-2.6105-3.1V3.1204c-.0369-1.5458 1.0856-2.8762 2.6157-3.1 1.6361-.1915 3.1178.9796 3.3093 2.6158.0128.1095.0193.2198.0202.3302zM4.1326 18.0548c-1.6417 0-2.9726 1.331-2.9726 2.9726C1.16 22.6691 2.4909 24 4.1326 24s2.9726-1.3309 2.9726-2.9726c0-1.6416-1.331-2.9726-2.9726-2.9726zm7.8728-9.0098c-1.3363-.004-2.612.5266-3.5538 1.478-.9352.9425-1.4586 2.2234-1.4554 3.564v8.9634c.006 1.656 1.3566 2.9928 3.0126 2.987 1.6473-.006 2.9809-1.3432 2.987-2.9905v-8.9767c-.0123-2.4826-2.033-4.491-4.5157-4.4855-.1249-.0029-.2499-.0048-.4747-.0017z"/>
        </svg>
      ),
    },
    {
      name: "SEMrush",
      color: "text-orange-600",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.283 13.283l-5.657 5.657-5.657-5.657 5.657-5.657 5.657 5.657z"/>
        </svg>
      ),
    },
    {
      name: "Ahrefs",
      color: "text-blue-600",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1-7h-2l-2-6h2l1 3 1-3h2l-2 6z"/>
        </svg>
      ),
    },
    {
      name: "HubSpot",
      color: "text-orange-500",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.978v-.07A2.199 2.199 0 0017.232.837h-.07a2.199 2.199 0 00-2.198 2.199v.07a2.197 2.197 0 001.267 1.978v2.846a4.28 4.28 0 00-2.145.629L9.445 3.92a2.968 2.968 0 10-1.431 1.43l4.642 4.641a4.278 4.278 0 00-.627 2.145H9.183a2.197 2.197 0 00-1.978-1.267h-.07a2.199 2.199 0 00-2.199 2.198v.07a2.199 2.199 0 002.199 2.198h.07a2.197 2.197 0 001.978-1.267h2.846a4.28 4.28 0 00.629 2.145l-4.642 4.642a2.961 2.961 0 10-1.43 1.43l4.641-4.642a4.278 4.278 0 002.145.627v2.846a2.198 2.198 0 00-1.267 1.978v.07a2.199 2.199 0 002.198 2.199h.07a2.199 2.199 0 002.199-2.199v-.07a2.198 2.198 0 00-1.267-1.978v-2.846a4.278 4.278 0 002.145-.627l4.641 4.642a2.961 2.961 0 101.43-1.43l-4.642-4.642a4.278 4.278 0 00.627-2.145h2.846a2.197 2.197 0 001.978 1.267h.07a2.199 2.199 0 002.199-2.198v-.07a2.199 2.199 0 00-2.199-2.199h-.07a2.197 2.197 0 00-1.978 1.267h-2.846a4.278 4.278 0 00-.629-2.145l4.642-4.641a2.968 2.968 0 10-1.431-1.43l-4.641 4.641a4.278 4.278 0 00-2.145-.627z"/>
        </svg>
      ),
    },
    {
      name: "Mailchimp",
      color: "text-yellow-500",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1-15h-2v7h7v-2h-5V7z"/>
        </svg>
      ),
    },
    {
      name: "Canva",
      color: "text-cyan-500",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 9.5c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75zm-9 0c-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75-.336-.75-.75-.75zm4.5 1.5c-2.07 0-3.75 1.68-3.75 3.75S9.93 18.5 12 18.5s3.75-1.68 3.75-3.75S14.07 11 12 11z"/>
        </svg>
      ),
    },
    {
      name: "WordPress",
      color: "text-blue-700",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C5.46 3.15 8.492 1.5 12 1.5c2.62 0 5.01 1.01 6.794 2.655-.043-.003-.084-.009-.13-.009-1.065 0-1.81.923-1.81 1.914 0 .888.525 1.643 1.065 2.513.413.702.794 1.61.794 2.92 0 .906-.348 1.962-.793 3.44L15.062 6.96l.01-.03zm-10.12 13.65L7.921 8.97l4.126 11.3c-.053.003-.106.007-.159.007-1.417 0-2.759-.368-3.92-1.002m11.32-9.05c0-.93-.105-1.805-.42-3.018C18.583 5.38 20.25 8.5 20.25 12c0 4.275-2.985 7.86-6.985 8.772l4.305-12.5c.808-2.016 1.073-3.632 1.073-5.055z"/>
        </svg>
      ),
    },
    {
      name: "Shopify",
      color: "text-green-600",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M15.337 2.58s-.296-.26-1.332-.26c-.083 0-.18.005-.29.012-.014-.02-.03-.042-.047-.063-.366-.39-1.004-.522-1.62-.522-1.275 0-2.535 1.094-3.567 2.998-.727.738-1.273 1.396-1.617 1.813-.91.29-1.555.496-1.627.519-.507.156-.522.172-.586.645C4.56 8.2 2.28 22.97 2.28 22.97l13.205 2.452 7.235-1.807s-4.436-21.412-4.486-21.63c-.07-.3-.31-.39-.897-.406zm-2.17 1.077c-.235.073-.495.152-.773.24V3.48c0-.542-.063-1.01-.17-1.416.51.076.855.64.944 1.594zm-1.545-.463c.096.368.156.82.156 1.387v.158c-.736.23-1.54.48-2.358.73.458-1.753 1.297-2.55 2.202-2.275zm-.73-1.02c.164 0 .312.03.45.086-.963.468-1.855 1.568-2.312 3.8-.71.22-1.406.438-2.06.638.544-1.76 1.77-4.524 3.922-4.524z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      color: "text-red-600",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: "Twitter/X",
      color: "text-blue-500",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "Hootsuite",
      color: "text-purple-600",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-7h2v-4h-2v4zm0-6h2V7h-2v2z"/>
        </svg>
      ),
    },
    {
      name: "Buffer",
      color: "text-blue-500",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v8h-2V7zm0 10h2v2h-2v-2z"/>
        </svg>
      ),
    },
    {
      name: "Figma",
      color: "text-purple-600",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
        </svg>
      ),
    },
    {
      name: "Photoshop",
      color: "text-blue-700",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M9.85 8.42c.68 0 1.17.11 1.47.33.3.22.45.57.45 1.05 0 .48-.18.84-.53 1.08-.36.24-.87.36-1.53.36h-.47V8.42h.61zm10.15-4.92v17c0 1.93-1.57 3.5-3.5 3.5H3.5C1.57 24 0 22.43 0 20.5v-17C0 1.57 1.57 0 3.5 0h13c1.93 0 3.5 1.57 3.5 3.5zM10.2 11.75c.7-.17 1.23-.49 1.58-.98.36-.48.54-1.05.54-1.71 0-1.02-.38-1.77-1.13-2.25-.76-.48-1.89-.72-3.4-.72H5.5v10.5h2.09v-4.11h.63c.76 0 1.37.11 1.84.33.47.22.89.58 1.24 1.08.36.5.75 1.16 1.17 1.98l.72 1.72h2.37l-1.03-2.28c-.38-.84-.76-1.51-1.14-2.01-.38-.5-.84-.91-1.37-1.23.5-.12.95-.22 1.18-.32z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-800 dark:via-cyan-900/20 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white text-sm font-semibold rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            🛠️ Industry Tools
          </motion.span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tools & Technologies {"You'll"} Master in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
              Digital Marketing Course
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
            Master industry-leading tools used by top marketing professionals worldwide
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.15, y: -5 }}
            >
              {/* Tool Icon Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-gray-700 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 relative overflow-hidden p-3 sm:p-4">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* SVG Icon */}
                <div className={`${tool.color} relative z-10 transition-transform duration-300 group-hover:scale-110 w-full h-full`}>
                  {tool.svg}
                </div>
              </div>

              {/* Tooltip on Hover */}
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-lg z-20"
                initial={{ opacity: 0, y: -10 }}
              >
                {tool.name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-500 rotate-45" />
</motion.div>
{/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
        </motion.div>
      ))}
    </div>

    {/* Additional Info Section */}
    <motion.div
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Card 1 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl flex items-center justify-center text-2xl text-blue-600 dark:text-blue-400 mb-4">
          🎯
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Hands-On Training
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Practical experience with real campaigns and live projects on actual platforms
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-400 transition-all">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 rounded-xl flex items-center justify-center text-2xl text-cyan-600 dark:text-cyan-400 mb-4">
          📊
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Industry Certifications
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Google Ads, Google Analytics, Facebook Blueprint & HubSpot certifications
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-400 transition-all">
        <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 rounded-xl flex items-center justify-center text-2xl text-teal-600 dark:text-teal-400 mb-4">
          🚀
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          Latest Updates
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Stay updated with the latest features and best practices in digital marketing
        </p>
      </div>
    </motion.div>

    {/* CTA Button */}
    <motion.div
      className="text-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <motion.a
        href="https://wa.me/9594402822?text=Hey%20I%20want%20to%20learn%20these%20marketing%20tools"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 hover:from-blue-700 hover:via-cyan-600 hover:to-teal-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Learning Today
      </motion.a>
    </motion.div>
  </div>

  {/* Background Decorative Elements */}
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
</section>
);
}
export default ToolsTechnologies;