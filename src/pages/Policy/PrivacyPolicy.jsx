import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4 text-base-content/80">
        Your privacy is important to us. This policy explains how we collect,
        use, and protect your personal information when you use our Habit
        Tracker application.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <p className="mb-4 text-base-content/80">
        We collect information such as your name, email address, profile photo,
        and habit-related data when you register and use the platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Data</h2>
      <p className="mb-4 text-base-content/80">
        Your data is used to provide personalized habit tracking, maintain
        streaks, improve features, and ensure secure authentication.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <p className="mb-4 text-base-content/80">
        We use secure authentication and protected routes to safeguard your
        information. Your data is never sold or shared with third parties for
        marketing purposes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
      <p className="text-base-content/80">
        You may update or delete your account information at any time through
        your profile settings or by contacting support.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
