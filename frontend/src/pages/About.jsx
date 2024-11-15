import React from 'react';

const About = () => {
  return (
    <div className=" min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-700 mb-4">About NestQuest</h1>
          <p className="text-lg sm:text-xl text-slate-700">
            Your gateway to seamless real estate transactions.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">Who We Are</h2>
          <p className="text-slate-700 leading-relaxed">
            <span className="font-semibold">NestQuest</span> is a modern real estate marketplace
            designed to simplify your property search and connect buyers, sellers, and renters. 
            We combine cutting-edge technology with industry expertise to make property transactions effortless and transparent.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-slate-100 shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">Our Mission</h2>
          <p className="text-slate-700 leading-relaxed">
            At NestQuest, our mission is to redefine the real estate experience. Whether you're buying, selling, or renting, 
            we aim to provide a platform that is reliable, intuitive, and efficient.
          </p>
        </section>

        {/* Features Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-4 text-slate-700 leading-relaxed">
            <li>Comprehensive property listings with high-quality images and descriptions.</li>
            <li>Advanced search filters to tailor your property search to your needs.</li>
            <li>Transparent pricing and secure communication with trusted agents.</li>
            <li>Expert resources to guide you every step of the way.</li>
          </ul>
        </section>

        {/* Vision Section */}
        <section className="bg-slate-100 shadow-lg rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">Our Vision</h2>
          <p className="text-slate-700 leading-relaxed">
            Our vision is to create a future where finding a home is as exciting as living in one. By leveraging the 
            latest technology, we aim to empower users with tools to make informed decisions confidently.
          </p>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg rounded-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-lg leading-relaxed mb-4">
            Have questions or need assistance? Our team is here to help.
          </p>
          <p className="font-semibold text-lg">
            Email: <a href="mailto:support@nestquest.com" className="underline text-slate-200">support@nestquest.com</a>
          </p>
          <p className="font-semibold text-lg">Phone: +1 (123) 456-7890</p>
        </section>
      </div>
    </div>
  );
};

export default About;
