import React from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
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
            <Shield className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-emerald-100">
              Your privacy is important to us. Learn how we protect your personal information.
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
                  <Eye className="w-6 h-6 text-emerald-600 mr-2" />
                  Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  HomeoVital ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how your personal information is collected, used, and disclosed by HomeoVital when you 
                  visit our website, use our services, or make purchases from us.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By accessing or using our service, you agree to the collection and use of information in 
                  accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used 
                  have the same meanings as in our Terms and Conditions.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                <p className="text-gray-600 mb-4">We may collect the following types of personal information:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Name, email address, and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Health information relevant to homeopathic consultations</li>
                  <li>Account credentials and preferences</li>
                  <li>Communication preferences and marketing opt-ins</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                <p className="text-gray-600 mb-4">We automatically collect certain information about your use of our services:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Log data including IP address, browser type, and pages visited</li>
                  <li>Device information such as operating system and device identifiers</li>
                  <li>Usage patterns and preferences</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-emerald-600 mr-2" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>To process and fulfill your orders</li>
                  <li>To provide homeopathic consultations and personalized recommendations</li>
                  <li>To communicate with you about your orders, account, and our services</li>
                  <li>To improve our website, products, and customer service</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To prevent fraud and ensure security</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">We may share your information in the following circumstances:</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
                <p className="text-gray-600 mb-4">
                  We work with trusted third-party service providers to help us operate our business, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Payment processors for secure transaction handling</li>
                  <li>Shipping companies for order fulfillment</li>
                  <li>Email service providers for communications</li>
                  <li>Analytics providers to understand website usage</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
                <p className="text-gray-600 mb-4">
                  We may disclose your information if required by law or in good faith belief that such action is necessary to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Comply with legal obligations or court orders</li>
                  <li>Protect and defend our rights or property</li>
                  <li>Prevent or investigate possible wrongdoing</li>
                  <li>Protect the personal safety of users or the public</li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-emerald-600 mr-2" />
                  Data Security
                </h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>SSL encryption for data transmission</li>
                  <li>Secure servers and databases</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and employee training</li>
                  <li>PCI DSS compliance for payment processing</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
                <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us at privacy@homeovital.com or use the contact 
                  information provided below.
                </p>
              </section>

              {/* Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze website traffic, and personalize content. You can control cookie settings through 
                  your browser preferences.
                </p>
                <p className="text-gray-600">
                  For more detailed information about our use of cookies, please see our Cookie Policy.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-600">
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you are a parent or guardian and 
                  believe your child has provided us with personal information, please contact us immediately.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date. You are 
                  advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              {/* Contact Information */}
              <section className="bg-emerald-50 p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> privacy@homeovital.com</p>
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

export default PrivacyPage;