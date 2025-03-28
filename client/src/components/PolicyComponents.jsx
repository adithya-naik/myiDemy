import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          At myidemy, we collect information you provide directly to us, such as when you create an account, enroll in a course, or contact our support team. This may include:
        </p>
        <ul className="list-disc pl-6">
          <li>Name and contact information</li>
          <li>Email address</li>
          <li>Payment information</li>
          <li>Course progress and learning data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p>
          We use the collected information to:
        </p>
        <ul className="list-disc pl-6">
          <li>Provide and improve our educational services</li>
          <li>Process payments</li>
          <li>Communicate with you about courses and updates</li>
          <li>Personalize your learning experience</li>
        </ul>
      </section>

      {/* Additional sections can be added */}
    </div>
  );
};

export const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using myidemy, you agree to these Terms of Service. If you do not agree, please do not use our platform.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. User Account</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Course Content</h2>
        <p>
          All course content is protected by copyright. You may not reproduce, distribute, or create derivative works without explicit permission.
        </p>
      </section>

      {/* Additional sections can be added */}
    </div>
  );
};

export const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device to help us improve your user experience and analyze site traffic.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6">
          <li>Essential Cookies: Necessary for site functionality</li>
          <li>Analytics Cookies: Help us understand site usage</li>
          <li>Preference Cookies: Remember your settings</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Managing Cookies</h2>
        <p>
          You can control cookies through your browser settings. However, disabling cookies may limit your experience on our platform.
        </p>
      </section>

      {/* Additional sections can be added */}
    </div>
  );
};