import React from 'react';
import './LegalPages.css';

const TermsOfService = () => {
  return (
    <div className="legal-container">
      <h1>Terms of Service</h1>
      <p className="legal-meta">Last updated: [Date, e.g., February 16, 2026]</p>
      
      <p>
        Please read these Terms of Service ("Terms") carefully before using the <strong>respol.eu </strong> 
        website (the "Service") operated by <strong>Res-Pol</strong> .
      </p>

      <h2>1. General Information</h2>
      <p>
        This website serves as a digital business card for <strong>Res-Pol</strong>, a company 
        specializing in the logistics of agricultural products. By accessing this website, you agree 
        to be bound by these Terms.
      </p>

      <h2>2. Disclaimer (Not a Public Offer)</h2>
      <p>The information provided on this website is for general informational purposes only.</p>
      <ul>
        <li>
          <strong>No Binding Offer:</strong> Nothing on this website constitutes a binding legal offer, 
          contract, or warranty. All descriptions of logistics services, routes, or potential capabilities 
          are subject to change.
        </li>
        <li>
          <strong>Individual Agreements:</strong> Specific terms, prices, and conditions for the 
          transportation of agricultural goods are determined solely through individual contracts signed 
          between the Client and <strong>Res-Pol</strong>.
        </li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        The content on this website, including text, logos, images, and graphics, is the property of 
        <strong> Res-Pol</strong> or used with permission. You may not reproduce, distribute, 
        or use any content from this website for commercial purposes without our prior written consent.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        We strive to keep the information on this website accurate and up-to-date. However, we make no 
        warranties regarding the accuracy, completeness, or reliability of any information. We shall not 
        be liable for any errors, omissions, or any outcomes resulting from the use of this information.
      </p>

      <h2>5. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of  
        <strong> EU</strong>, without regard to its 
        conflict of law provisions.
      </p>

      <h2>6. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us at:</p>
      <ul>
        <li>Phone: <strong>+48 577 480 689</strong></li>
      </ul>
    </div>
  );
};

export default TermsOfService;