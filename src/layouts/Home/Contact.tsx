import classNames from "classnames";

// Icon Imports
import { IoMailOutline, IoPaperPlaneOutline } from "react-icons/io5";

// Component Imports
import { InputText } from "../../components/Input";
import React from "react";

function Form() {
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className="mt-16 flex flex-col items-center">
      <div className="border-brand-primary w-fit bg-background-secondary border-2 rounded-br-3xl rounded-tl-3xl p-4">
        <p className="text-2xl">Send Me A Message</p>
      </div>
      <div className="w-full lg:w-3/5 mt-20">
        <div className="flex flex-col md:flex-row gap-16">
          <InputText
            value={formValue.name}
            label="Name *"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
            required={true}
          />
          <InputText
            value={formValue.email}
            label="Email *"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="w-full mt-20">
          <InputText
            value={formValue.message}
            label="Your Message *"
            id="message"
            placeholder="Enter your needs"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="rounded-full cursor-pointer text-background-primary bg-brand-primary px-4 py-3 flex gap-4"
          >
            <p className="text-sm">Send Message</p>
            <IoPaperPlaneOutline className="text-xl" />
          </button>
        </div>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <div id="contact" className={classNames("h-full lg:h-[90vh] p-8 xl:px-24")}>
      <div className="flex flex-col items-center justify-center">
        <span className="text-brand-primary text-4xl font-semibold flex items-center gap-4">
          <span className="text-5xl">
            <IoMailOutline />
          </span>{" "}
          Contact
        </span>
        <div className="flex items-center mt-4">
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
          <hr className="w-58 border border-brand-primary" />
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
        </div>
        <p className="text-gray-200 text-xs mt-8">
          Let’s team up and create something your ex will regret missing.
        </p>
      </div>
      <Form />
    </div>
  );
}

export default Contact;
