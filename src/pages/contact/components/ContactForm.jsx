import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Field type karte hi uska error remove
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    setSubmitted(false);
  };

  // ==========================================
  // VALIDATION
  // ==========================================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (
      formData.phone &&
      !/^[0-9+\-\s()]{7,15}$/.test(formData.phone)
    ) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message should be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ==========================================
  // SUBMIT
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Contact Form Data:", formData);

    // Laravel API baad me yahan call hogi

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // Common input class
  const inputClass = `
    w-full
    rounded-[14px]
    border
    border-[#351714]/15
    bg-[#fff9f1]
    px-4
    py-3.5
    text-[11px]
    font-medium
    text-[#351714]
    outline-none
    transition-all
    duration-300
    placeholder:text-[#351714]/35
    focus:border-[#351714]
    focus:ring-2
    focus:ring-[#ffdf38]/50
  `;

  return (
    <section
      id="contact-form"
      className="
        relative
        overflow-hidden
        bg-[#f5efe7]
        px-5
        py-20
        md:px-8
        md:py-28
      "
    >
      {/* ======================================
          BACKGROUND DECORATION
      ====================================== */}

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#8edbe3]/20 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 top-0 h-[350px] w-[350px] rounded-full bg-[#f3a7bd]/20 blur-[110px]" />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-1
          gap-14
          lg:grid-cols-[0.8fr_1.2fr]
          lg:items-center
          lg:gap-20
        "
      >
        {/* ======================================
            LEFT CONTENT
        ====================================== */}

        <div>
          {/* LABEL */}

          <div className="flex items-center gap-2">
            <Sparkles
              size={14}
              className="text-[#f26d3d]"
            />

            <p className="text-[9px] font-extrabold uppercase tracking-[2px] text-[#f26d3d]">
              Send Us A Message
            </p>
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-4
              text-[40px]
              font-black
              uppercase
              leading-[0.95]
              tracking-[-1.5px]
              text-[#351714]
              sm:text-[46px]
              md:text-[54px]
              lg:text-[60px]
            "
          >
            Have Something
            <br />
            In Mind?

            <span className="block text-[#f26d3d]">
              Let's Talk.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              max-w-[500px]
              text-[12px]
              font-medium
              leading-7
              text-[#725c56]
              md:text-[13px]
            "
          >
            Whether it's a custom cake, bulk bakery order,
            product question or simply a message for our
            team, fill out the form and we'll be happy to
            hear from you.
          </p>

          {/* ==================================
              SMALL INFO BOX
          ================================== */}

          <div
            className="
              mt-8
              max-w-[500px]
              rounded-[22px]
              border
              border-[#351714]
              bg-[#ffdf38]
              p-5
              shadow-[4px_4px_0_#351714]
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#351714]
                  bg-[#fff9f1]
                "
              >
                <MessageSquare
                  size={17}
                  className="text-[#351714]"
                />
              </div>

              <div>
                <p className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-[#351714]/55">
                  Quick Response
                </p>

                <h3 className="mt-1 text-[14px] font-black uppercase text-[#351714]">
                  We'll Get Back To You
                </h3>

                <p className="mt-2 text-[9px] font-medium leading-5 text-[#351714]/60">
                  Send us your details and our bakery team
                  will respond as soon as possible.
                </p>
              </div>
            </div>
          </div>

          {/* ==================================
              SMALL POINTS
          ================================== */}

          <div className="mt-7 space-y-3">
            {[
              "Custom Cake Enquiries",
              "Bulk & Special Orders",
              "General Questions",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <span
                  className="
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#351714]
                    text-white
                  "
                >
                  <CheckCircle2 size={11} />
                </span>

                <span className="text-[9px] font-bold uppercase tracking-[0.5px] text-[#351714]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================
            RIGHT FORM
        ====================================== */}

        <div className="relative">
          {/* PINK BACK */}

          <div
            className="
              absolute
              -right-3
              -top-3
              h-full
              w-full
              rounded-[32px]
              border
              border-[#351714]
              bg-[#f3a7bd]
            "
          />

          {/* FORM CARD */}

          <div
            className="
              relative
              z-10
              rounded-[32px]
              border
              border-[#351714]
              bg-white
              p-5
              shadow-[7px_7px_0_#351714]
              sm:p-7
              md:p-9
            "
          >
            {/* FORM HEADER */}

            <div className="mb-7">
              <p className="text-[8px] font-extrabold uppercase tracking-[1.5px] text-[#f26d3d]">
                Contact Form
              </p>

              <h3 className="mt-2 text-[24px] font-black uppercase text-[#351714] md:text-[28px]">
                Send A Message
              </h3>

              <p className="mt-2 text-[10px] font-medium leading-5 text-[#725c56]">
                Fields marked with * are required.
              </p>
            </div>

            {/* SUCCESS MESSAGE */}

            {submitted && (
              <div
                className="
                  mb-6
                  flex
                  items-start
                  gap-3
                  rounded-[15px]
                  border
                  border-[#351714]
                  bg-[#b8d69b]
                  p-4
                "
              >
                <CheckCircle2
                  size={18}
                  className="mt-0.5 shrink-0 text-[#351714]"
                />

                <div>
                  <p className="text-[10px] font-black uppercase text-[#351714]">
                    Message Sent!
                  </p>

                  <p className="mt-1 text-[9px] font-medium text-[#351714]/65">
                    Thank you. We'll get back to you soon.
                  </p>
                </div>
              </div>
            )}

            {/* ==================================
                FORM
            ================================== */}

            <form
              onSubmit={handleSubmit}
              noValidate
            >
              {/* NAME + EMAIL */}

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[8px] font-extrabold uppercase tracking-[1px] text-[#351714]"
                  >
                    Your Name *
                  </label>

                  <div className="relative">
                    <User
                      size={15}
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#351714]/40
                      "
                    />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`${inputClass} pl-11`}
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-1.5 text-[8px] font-medium text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[8px] font-extrabold uppercase tracking-[1px] text-[#351714]"
                  >
                    Email Address *
                  </label>

                  <div className="relative">
                    <Mail
                      size={15}
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#351714]/40
                      "
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className={`${inputClass} pl-11`}
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1.5 text-[8px] font-medium text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* PHONE + SUBJECT */}

              <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* PHONE */}

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[8px] font-extrabold uppercase tracking-[1px] text-[#351714]"
                  >
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={15}
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#351714]/40
                      "
                    />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={`${inputClass} pl-11`}
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-1.5 text-[8px] font-medium text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* SUBJECT */}

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-[8px] font-extrabold uppercase tracking-[1px] text-[#351714]"
                  >
                    Subject *
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={15}
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#351714]/40
                      "
                    />

                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className={`${inputClass} pl-11`}
                    />
                  </div>

                  {errors.subject && (
                    <p className="mt-1.5 text-[8px] font-medium text-red-600">
                      {errors.subject}
                    </p>
                  )}
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="block text-[8px] font-extrabold uppercase tracking-[1px] text-[#351714]"
                  >
                    Your Message *
                  </label>

                  <span className="text-[7px] font-medium text-[#351714]/40">
                    {formData.message.length}/500
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  rows={6}
                  placeholder="Tell us about your enquiry..."
                  className={`${inputClass} resize-none`}
                />

                {errors.message && (
                  <p className="mt-1.5 text-[8px] font-medium text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  group
                  mt-6
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#351714]
                  bg-[#351714]
                  px-6
                  py-4
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[1px]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#f26d3d]
                  hover:shadow-[4px_4px_0_#351714]
                "
              >
                Send Message

                <Send
                  size={14}
                  strokeWidth={2.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-0.5
                  "
                />
              </button>

              <p className="mt-4 text-center text-[8px] font-medium leading-4 text-[#725c56]/70">
                By sending this form, you agree to be contacted
                regarding your enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;