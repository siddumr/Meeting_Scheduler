import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const AboutUs = () => {
  useEffect(() => {
    // Get the current URL, removing any fragment
    const documentUrl = document.location.href.replace(/#.*$/, '');

    // Iterate through all links
    const linkEls = document.getElementsByTagName('A');
    for (let linkIndex = 0; linkIndex < linkEls.length; linkIndex++) {
      const linkEl = linkEls[linkIndex];

      // Ignore links that don't begin with #
      if (!linkEl.getAttribute('href').match(/^#/)) {
        continue;
      }

      // Convert to an absolute URL
      linkEl.setAttribute('href', documentUrl + linkEl.getAttribute('href'));
    }
  }, []);

  return (
      
    <div>
      <base href="https://shreyascyber.com/test/about/" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />

      {/* Vendor CSS Files */}
      <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
      <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
      <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
      <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
      <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
      <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

      {/* Template Main CSS File */}
      <link href="assets/css/style.css" rel="stylesheet" />

      <style>
        {`
          .wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 10px;
            margin-bottom: -50px;
          }
        `}
      </style>

      <div className="wrapper" style={{backgroundColor:' rgb(94, 216, 246)'}}>
        <i className="bx bx-info-circle" style={{ fontSize: '40px', color: 'blue' }}></i>
        <h1>&nbsp;About Us</h1>
      </div>

      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative" style={{backgroundColor:'red'}}>
              <a href="https://www.youtube.com/watch?v=O8Y1vlfpbEU&pp=ygULZ29vZ2xlIG1lZXQ%3D" className="glightbox play-btn mb-4"></a>
            </div>

            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
              <h3>About VirtualVisa: Pioneering Seamless Collaboration in Virtual Meetings</h3>
              <p>
              Welcome to VirtualVisa, where the future of online meetings is redefined through innovation and collaborative prowess. VirtualVisa is not just an online meeting app; it's a groundbreaking platform that seamlessly integrates coding capabilities into your virtual meeting space.
              </p>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-share-alt"></i></div>
                <h4 className="title"><a href="">VirtualVisa is a community</a></h4>
                <p className="description">
                At VirtualVisa, our mission is to empower developers, teams, and collaborators to code together in real time, transforming virtual meetings into dynamic coding experiences. Whether you're a seasoned coder or embarking on a coding journey, VirtualVisa allows you to write and visualize code instantly within the app.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-happy-alt"></i></div>
                <h4 className="title"><a href="">Mission and Vision:</a></h4>
                <p className="description">
                Empowering global connectivity, VirtualVisa is dedicated to providing a seamless and user-friendly platform for online meetings, fostering collaboration, and transcending geographical boundaries.
                We envision VirtualVisa as the foremost innovator in transforming virtual meetings, offering cutting-edge features to redefine digital collaboration, making it more accessible, engaging, and efficient for users worldwide.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon"><i className="bx bx-user-voice"></i></div>
                <h4 className="title"><a href="">Usage: Making the Most of VirtualVisa</a></h4>
                <p className="description">
                Explore the myriad ways to maximize your experience with VirtualVisa. From streamlined virtual meetings to dynamic collaboration, discover the full spectrum of features designed to enhance your online interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}

      {/* Vendor JS Files */}
      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>

      {/* Template Main JS File */}
      <script src="assets/js/main.js"></script>
      
      </div>
     
      
  );
};

export default AboutUs;
