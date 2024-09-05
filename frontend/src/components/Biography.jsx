import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            At our Medical Clinic, we are dedicated to providing exceptional healthcare services with a patient-centered approach.
            Our team of highly skilled doctors, nurses, and healthcare professionals is committed to delivering personalized care
            to individuals of all ages. With a focus on preventive medicine, early diagnosis, and advanced treatment options, we
            aim to enhance the quality of life for our patients. Our clinic offers a wide range of medical services, from routine
            check-ups to specialized care, ensuring that every patient receives comprehensive attention tailored to their specific
            needs. Compassion, professionalism, and innovation define who we are, as we work tirelessly to improve health outcomes
            and promote well-being in our community.
          </p>
          <p><br /></p>
          <p>At ZeeCare Medical Institute, we are committed to delivering exceptional, patient-centered healthcare through a blend
            of advanced technology and compassionate care. Our experienced team offers a comprehensive range of services, including
            preventive care, diagnostic testing, specialized treatments, urgent care, and wellness programs. We prioritize your health
            and well-being, providing personalized attention and cutting-edge solutions in a state-of-the-art facility. By choosing us,
            you gain access to expert professionals dedicated to exceeding your healthcare expectations and supporting you every step of
            the way. We look forward to the opportunity to serve you and enhance your quality of life.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
