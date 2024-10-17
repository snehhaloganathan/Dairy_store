import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <p>Explore our extensive range of dairy delights, from creamy cheeses to wholesome yogurts and everything in between. There's something for every palate.</p>
          <p>Our dairy products guarantee the freshest and most flavorful experience.</p> 
          <p>We believe in fostering strong connections with our community. By supporting us, you're supporting the sustainable growth of our region.</p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
