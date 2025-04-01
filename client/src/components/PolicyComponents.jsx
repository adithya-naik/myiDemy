import React, { useState } from 'react';

// Reusable PolicyLayout component
const PolicyLayout = ({ title, children }) => {
  const [expanded, setExpanded] = useState({});

  const toggleSection = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Helper component for collapsible sections
  const Section = ({ id, title, children }) => (
    <section className="mb-8 border-b pb-4">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => toggleSection(id)}
      >
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <span className="text-blue-500">
          {expanded[id] ? '▲' : '▼'}
        </span>
      </div>
      <div className={`mt-4 transition-all duration-300 ${expanded[id] ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </section>
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">{title}</h1>
      <p className="text-gray-500 text-sm mb-8 text-center">
        Last Updated: April 1, 2025
      </p>
      <div className="bg-white rounded-lg shadow-lg p-8">
        {children({ Section, expanded, toggleSection })}
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        <p>If you have any questions about these policies, please contact us at support@myidemy.com</p>
      </div>
    </div>
  );
};

export const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy">
      {({ Section }) => (
        <>
          <p className="mb-6 text-gray-700">
            At myidemy, we value your privacy and are committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
          </p>

          <Section id="information-collected" title="1. Information We Collect">
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, enroll in a course, 
              participate in forums, or contact our support team. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Name and contact information</li>
              <li>Email address and password</li>
              <li>Profile information and preferences</li>
              <li>Payment and billing information</li>
              <li>Course progress, completion data, and assessment results</li>
              <li>Communications with instructors and support team</li>
            </ul>
            <p className="mb-4">
              We also collect certain information automatically when you use our platform, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and settings</li>
              <li>Usage data and learning patterns</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </Section>

          <Section id="information-use" title="2. How We Use Your Information">
            <p className="mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our educational services</li>
              <li>Process transactions and manage your account</li>
              <li>Personalize your learning experience and content recommendations</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Communicate with you about courses, updates, and promotional offers</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Protect against fraudulent, unauthorized, or illegal activity</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </Section>

          <Section id="information-sharing" title="3. Information Sharing and Disclosure">
            <p className="mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>With Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, data analysis, and customer support.</li>
              <li><strong>With Instructors:</strong> Course instructors may receive information about students enrolled in their courses.</li>
              <li><strong>For Legal Reasons:</strong> When required by law or in response to valid legal processes.</li>
              <li><strong>With Your Consent:</strong> When you have given us permission to do so.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties for marketing purposes.
            </p>
          </Section>

          <Section id="data-security" title="4. Data Security">
            <p className="mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, 
              so we cannot guarantee absolute security.
            </p>
            <p>
              We regularly review our security practices and update them as necessary to maintain appropriate levels of protection.
            </p>
          </Section>

          <Section id="data-retention" title="5. Data Retention">
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law. When determining the retention period, we consider the 
              amount, nature, and sensitivity of the information, the potential risk of harm from unauthorized use or disclosure, 
              and applicable legal requirements.
            </p>
          </Section>

          <Section id="your-rights" title="6. Your Rights and Choices">
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Delete your personal information</li>
              <li>Restrict or object to certain processing activities</li>
              <li>Data portability (receiving your data in a structured, commonly used format)</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at privacy@myidemy.com. We will respond to your request within 
              the timeframe required by applicable law.
            </p>
          </Section>

          <Section id="international-transfers" title="7. International Data Transfers">
            <p>
              Your information may be transferred to, stored, and processed in countries other than the one in which you reside. 
              When we transfer personal information across borders, we take steps to ensure that your information receives an 
              adequate level of protection in the jurisdictions in which we process it.
            </p>
          </Section>

          <Section id="changes" title="8. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the new policy on our platform and updating the "Last Updated" date. 
              We encourage you to review the Privacy Policy whenever you access our platform.
            </p>
          </Section>
        </>
      )}
    </PolicyLayout>
  );
};

export const TermsOfService = () => {
  return (
    <PolicyLayout title="Terms of Service">
      {({ Section }) => (
        <>
          <p className="mb-6 text-gray-700">
            Welcome to myidemy. These Terms of Service govern your use of our platform, so please read them carefully before 
            accessing or using our services.
          </p>

          <Section id="acceptance" title="1. Acceptance of Terms">
            <p className="mb-4">
              By accessing or using myidemy, you agree to be bound by these Terms of Service and our Privacy Policy. 
              If you do not agree to these terms, please do not use our platform.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Your continued use of the platform after such modifications 
              constitutes your acceptance of the updated terms.
            </p>
          </Section>

          <Section id="user-accounts" title="2. User Accounts">
            <p className="mb-4">
              To access certain features of our platform, you must create an account. When registering, you agree to provide 
              accurate, current, and complete information.
            </p>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that 
              occur under your account. You must immediately notify us of any unauthorized use of your account.
            </p>
            <p>
              We reserve the right to disable your account if we determine, in our sole discretion, that you have violated 
              these Terms of Service or engaged in fraudulent or abusive behavior.
            </p>
          </Section>

          <Section id="course-content" title="3. Course Content and Intellectual Property">
            <p className="mb-4">
              All content provided on myidemy, including but not limited to courses, videos, text, graphics, logos, and images, 
              is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p className="mb-4">
              When you enroll in a course, we grant you a limited, non-exclusive, non-transferable license to access and use 
              the course content for your personal, non-commercial educational purposes.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, 
              republish, download, store, transmit, or otherwise exploit any course content without our express written permission.
            </p>
          </Section>

          <Section id="user-conduct" title="4. User Conduct">
            <p className="mb-4">
              You agree to use our platform in compliance with applicable laws and these Terms of Service. Prohibited activities include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Using the platform for any illegal purpose or in violation of any laws</li>
              <li>Impersonating another person or entity</li>
              <li>Interfering with or disrupting the platform or servers</li>
              <li>Attempting to gain unauthorized access to any part of the platform</li>
              <li>Collecting user information without consent</li>
              <li>Posting or transmitting harmful code or malware</li>
              <li>Engaging in spamming, phishing, or other deceptive practices</li>
              <li>Posting content that is defamatory, obscene, or otherwise objectionable</li>
            </ul>
          </Section>

          <Section id="payment-terms" title="5. Payment Terms">
            <p className="mb-4">
              Certain courses on myidemy require payment. By purchasing a course, you agree to pay all fees and applicable taxes.
            </p>
            <p className="mb-4">
              All payments are processed through secure third-party payment processors. We do not store your full credit card details.
            </p>
            <p className="mb-4">
              Course fees are non-refundable except as described in our Refund Policy or as required by applicable law.
            </p>
            <p>
              We reserve the right to modify our pricing at any time. Any price changes will not affect courses you have already purchased.
            </p>
          </Section>

          <Section id="disclaimers" title="6. Disclaimers">
            <p className="mb-4">
              myidemy and its content are provided "as is" without warranties of any kind, either express or implied, 
              including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            <p className="mb-4">
              We do not guarantee that the platform will be uninterrupted, secure, or error-free, or that defects will be corrected.
            </p>
            <p>
              Educational content on myidemy is for informational purposes only and is not a substitute for professional advice or certification in any field.
            </p>
          </Section>

          <Section id="limitation-liability" title="7. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, myidemy and its affiliates, officers, employees, agents, partners, and licensors 
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or 
              use the platform.
            </p>
          </Section>

          <Section id="termination" title="8. Termination">
            <p>
              We may terminate or suspend your account and access to our platform at any time, without prior notice or liability, 
              for any reason, including if you breach these Terms of Service. Upon termination, your right to use the platform will 
              immediately cease.
            </p>
          </Section>

          <Section id="governing-law" title="9. Governing Law">
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of [Jurisdiction], 
              without regard to its conflict of law provisions. Any dispute arising from these terms shall be resolved exclusively 
              in the courts located in [Jurisdiction].
            </p>
          </Section>
        </>
      )}
    </PolicyLayout>
  );
};

export const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy">
      {({ Section }) => (
        <>
          <p className="mb-6 text-gray-700">
            This Cookie Policy explains how myidemy uses cookies and similar technologies to recognize you when you visit our platform. 
            It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>

          <Section id="what-are-cookies" title="1. What Are Cookies?">
            <p className="mb-4">
              Cookies are small data files that are placed on your device when you visit a website. Cookies are widely used by website owners 
              to make their websites work efficiently and provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, myidemy) are called "first-party cookies." Cookies set by parties other than 
              the website owner are called "third-party cookies." Third-party cookies enable third-party features or functionality to be 
              provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>
          </Section>

          <Section id="types-of-cookies" title="2. Types of Cookies We Use">
            <p className="mb-4">
              We use the following types of cookies:
            </p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be 
                switched off in our systems. They are usually only set in response to actions made by you, such as logging in, 
                setting your privacy preferences, or filling in forms. These cookies do not store any personally identifiable information.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and 
                improve the performance of our site. They help us know which pages are the most and least popular and see how visitors 
                move around the site. All information these cookies collect is aggregated and anonymous.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization. 
                They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, 
                some or all of these services may not function properly.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by 
                those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not directly 
                store personal information but uniquely identify your browser and internet device.
              </li>
            </ul>
          </Section>

          <Section id="specific-cookies" title="3. Specific Cookies We Use">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2 text-left">Cookie Name</th>
                    <th className="border p-2 text-left">Type</th>
                    <th className="border p-2 text-left">Purpose</th>
                    <th className="border p-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">session_id</td>
                    <td className="border p-2">Essential</td>
                    <td className="border p-2">Maintains user session</td>
                    <td className="border p-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border p-2">auth_token</td>
                    <td className="border p-2">Essential</td>
                    <td className="border p-2">Authenticates logged-in users</td>
                    <td className="border p-2">30 days</td>
                  </tr>
                  <tr>
                    <td className="border p-2">_ga</td>
                    <td className="border p-2">Performance</td>
                    <td className="border p-2">Google Analytics - Distinguishes users</td>
                    <td className="border p-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border p-2">_gid</td>
                    <td className="border p-2">Performance</td>
                    <td className="border p-2">Google Analytics - Distinguishes users</td>
                    <td className="border p-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border p-2">preferences</td>
                    <td className="border p-2">Functionality</td>
                    <td className="border p-2">Stores user preferences</td>
                    <td className="border p-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="managing-cookies" title="4. Managing Cookies">
            <p className="mb-4">
              You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively 
              impact your user experience and parts of our website may no longer be fully accessible.
            </p>
            <p className="mb-4">
              <strong>Browser Controls:</strong> Most browsers allow you to control cookies through their settings preferences. 
              For more information about how to manage cookies through your browser:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Chrome: <span className="text-blue-600">chrome://settings/cookies</span></li>
              <li>Firefox: <span className="text-blue-600">about:preferences#privacy</span></li>
              <li>Safari: Preferences &gt; Privacy</li>
              <li>Edge: Settings &gt; Site Permissions &gt; Cookies</li>
            </ul>
            <p className="mb-4">
              <strong>Cookie Preference Tool:</strong> We provide a cookie preferences tool on our website that allows you to accept 
              or decline non-essential cookies.
            </p>
            <p>
              <strong>Do Not Track:</strong> Some browsers have a "Do Not Track" feature that signals to websites that you visit that 
              you do not want your online activity tracked. These features are not yet uniform, so we do not currently respond to such signals.
            </p>
          </Section>

          <Section id="third-party-cookies" title="5. Third-Party Cookies">
            <p className="mb-4">
              We may use services from third parties that use cookies on our website. These third parties include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Analytics providers</strong> such as Google Analytics to help us understand how users interact with our website</li>
              <li><strong>Payment processors</strong> to enable secure transactions</li>
              <li><strong>Video hosting services</strong> to deliver course content</li>
              <li><strong>Social media platforms</strong> if you choose to share content or log in using social media accounts</li>
            </ul>
            <p className="mt-4">
              Please refer to these third parties' privacy policies for more information about how they use cookies and your information.
            </p>
          </Section>

          <Section id="updates-to-policy" title="6. Updates to This Cookie Policy">
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. 
              Any changes will become effective when we post the revised policy on our website. We encourage you to periodically review 
              this page for the latest information on our cookie practices.
            </p>
          </Section>
        </>
      )}
    </PolicyLayout>
  );
};

// Navigation component for policy pages
export const PolicyNavigation = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-8">
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        <a href="/privacy-policy" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Terms of Service
        </a>
        <a href="/cookie-policy" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Cookie Policy
        </a>
      </div>
    </div>
  );
};