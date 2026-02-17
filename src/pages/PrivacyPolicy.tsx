import React from 'react';
import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-container">
      <h1>Privacy Policy</h1>
      <p className="legal-meta">Last updated: [Date, e.g., February 16, 2026]</p>
      
      <p>
        This Privacy Policy describes how <strong>Res-Pol</strong> handles 
        information when you visit our website <strong>respol.eu</strong>.
      </p>

      <h2>1. No Personal Data Collection</h2>
      <p>
        We respect your privacy. Our website is strictly informational (a "business card" website). 
        We do not collect, store, or process any personal data from our visitors.
      </p>
      <ul>
        <li>We do not use contact forms.</li>
        <li>We do not require user registration.</li>
        <li>We do not use tracking cookies for marketing or analytics.</li>
      </ul>
      <p>
        To contact us, you may use the phone number or email address listed on the website. 
        Any communication initiated by you via phone or external email is done voluntarily, 
        and such data is handled outside of this website’s infrastructure.
      </p>

      <h2>2. Technical Data and Server Logs</h2>
      <p>
        Like most websites, our hosting provider may automatically collect non-personal technical 
        information in server logs. This may include:
      </p>
      <ul>
        <li>Your IP address (anonymized where possible).</li>
        <li>Browser type and version.</li>
        <li>Time and date of access.</li>
      </ul>
      <p>
        This data is used solely for the technical stability and security of the website.
      </p>

      <h2>3. Third-Party Links</h2>
      <p>
        Our website may contain links to external websites or services (e.g., maps, messengers). 
        We are not responsible for the privacy practices or the content of these third-party sites.
      </p>

      <h2>4. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <ul>
        <li>By phone: <strong>+48 577 480 689</strong></li>
        <li>By email: <strong>info@respol.eu</strong></li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;