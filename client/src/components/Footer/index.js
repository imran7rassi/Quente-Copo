import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark p-3 footer text-center d-flex justify-content-between">
      <div className="">
        <a href="#" className="px-2">Privacy Policy</a>
        <a href="#" className="px-2">Terms of Use</a>
      </div>
      <div className="fa-lg text-light list-inline-item">
        <a href="https://github.com/imran7rassi"><i className="fab fa-github px-2"></i></a>
        <a href="https://www.linkedin.com/in/imran-rasi-a01a98259/"><i className="fab fa-linkedin px-2"></i></a>
        <a href="https://www.facebook.com/imran-khan-rassi"><i className="fab fa-facebook px-2"></i></a>
      </div>
      

    </footer>
  );
};

export default Footer;