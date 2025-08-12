import React from 'react';
import { Scale, FileText, AlertTriangle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Scale className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-emerald-100">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-emerald-200 mt-2">Last updated: January 15, 2024</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-emerald-600 mr-2" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of the HomeoVital website and services 
                  (collectively, the "Service") operated by HomeoVital ("us", "we", or "our").
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
                  with any part of these terms, then you may not access the Service.
                </p>
              </section>

              {/* Use of Services */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Our Services</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Eligibility</h3>
                <p className="text-gray-600 mb-4">
                  You must be at least 18 years old to use our services. By using our services, you represent 
                  and warrant that you are at least 18 years of age and have the legal capacity to enter into 
                  this agreement.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Account Registration</h3>
                <p className="text-gray-600 mb-4">When you create an account with us, you must provide information that is accurate, complete, and current. You are responsible for:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Safeguarding your account password and login credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Maintaining accurate and up-to-date account information</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Acceptable Use</h3>
                <p className="text-gray-600 mb-4">You agree not to use our Service to:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use the Service for any commercial purpose without permission</li>
                  <li>Impersonate another person or entity</li>
                </ul>
              </section>

              {/* Products and Services */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Products and Services</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Information</h3>
                <p className="text-gray-600 mb-4">
                  We strive to provide accurate information about our homeopathic products. However, we do not 
                  warrant that product descriptions, images, or other content is accurate, complete, reliable, 
                  current, or error-free.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing and Availability</h3>
                <p className="text-gray-600 mb-4">
                  All prices are subject to change without notice. We reserve the right to modify or discontinue 
                  any product at any time. Product availability is not guaranteed and may vary by location.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Orders and Payment</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>All orders are subject to acceptance and availability</li>
                  <li>We reserve the right to refuse or cancel any order</li>
                  <li>Payment is due at the time of order placement</li>
                  <li>We accept major credit cards, PayPal, and other specified payment methods</li>
                </ul>
              </section>

              {/* Consultations */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultation Services</h2>
                
                <p className="text-gray-600 mb-4">
                  Our consultation services are provided by licensed homeopathic practitioners. By booking a 
                  consultation, you acknowledge that:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Homeopathic consultations are not a substitute for conventional medical care</li>
                  <li>You should continue any prescribed medications unless advised otherwise by your physician</li>
                  <li>You will provide accurate and complete health information</li>
                  <li>Results may vary and are not guaranteed</li>
                  <li>Emergency conditions require immediate medical attention</li>
                </ul>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Medical Disclaimer</h4>
                      <p className="text-yellow-700 text-sm mt-1">
                        Our services are not intended to diagnose, treat, cure, or prevent any disease. 
                        Always consult with a qualified healthcare provider for medical conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-emerald-600 mr-2" />
                  Intellectual Property Rights
                </h2>
                <p className="text-gray-600 mb-4">
                  The Service and its original content, features, and functionality are and will remain the 
                  exclusive property of HomeoVital and its licensors. The Service is protected by copyright, 
                  trademark, and other laws.
                </p>
                <p className="text-gray-600">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, 
                  publicly perform, republish, download, store, or transmit any of the material on our Service 
                  without our prior written consent.
                </p>
              </section>

              {/* Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                  your information when you use our Service. By using our Service, you agree to the collection 
                  and use of information in accordance with our Privacy Policy.
                </p>
                <p className="text-gray-600">
                  Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  In no event shall HomeoVital, nor its directors, employees, partners, agents, suppliers, or 
                  affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                  resulting from your use of the Service.
                </p>
                <p className="text-gray-600">
                  Our total liability to you for all claims arising out of or relating to the use of or any 
                  inability to use any portion of the Service shall not exceed the amount you paid to us during 
                  the twelve (12) months prior to such claim.
                </p>
              </section>

              {/* Indemnification */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
                <p className="text-gray-600">
                  You agree to defend, indemnify, and hold harmless HomeoVital and its licensee and licensors, 
                  and their employees, contractors, agents, officers and directors, from and against any and all 
                  claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but 
                  not limited to attorney's fees).
                </p>
              </section>

              {/* Termination */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your account immediately, without prior notice or liability, for 
                  any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="text-gray-600">
                  Upon termination, your right to use the Service will cease immediately. If you wish to terminate 
                  your account, you may simply discontinue using the Service.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600">
                  These Terms shall be interpreted and governed by the laws of the State of [Your State], 
                  without regard to its conflict of law provisions. Our failure to enforce any right or 
                  provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days' notice prior to any new 
                  terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </section>

              {/* Contact Information */}
              <section className="bg-emerald-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@homeovital.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Main Street, Downtown, City 10001</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;