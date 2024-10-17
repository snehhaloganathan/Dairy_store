import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          
          <p className="mt-3">
            <BiMailSend /> : www.naturelldairies@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 9842860249
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
