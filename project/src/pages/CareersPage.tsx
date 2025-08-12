import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, Users, Award, ArrowRight, Send, Upload, X, FileText, User, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    jobId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    coverLetter: '',
    linkedinProfile: '',
    portfolioUrl: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File}>({});

  const jobOpenings = [
    {
      id: 'homeopath-senior',
      title: 'Senior Homeopathic Practitioner',
      department: 'Medical',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      experience: '5+ years',
      description: 'We are seeking an experienced homeopathic practitioner to join our growing team. The ideal candidate will have extensive experience in constitutional homeopathy and chronic disease management.',
      requirements: [
        'BHMS or equivalent homeopathic medical degree',
        'Valid state license to practice homeopathy',
        '5+ years of clinical experience',
        'Expertise in constitutional treatment',
        'Excellent communication skills',
        'Experience with electronic health records'
      ],
      responsibilities: [
        'Conduct comprehensive patient consultations',
        'Develop personalized treatment plans',
        'Maintain accurate patient records',
        'Collaborate with multidisciplinary team',
        'Participate in continuing education programs',
        'Mentor junior practitioners'
      ]
    },
    {
      id: 'pediatric-homeopath',
      title: 'Pediatric Homeopath',
      department: 'Medical',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$70,000 - $100,000',
      experience: '3+ years',
      description: 'Join our pediatric team to provide gentle, effective homeopathic care for children and families. We are looking for a compassionate practitioner with specialized pediatric training.',
      requirements: [
        'BHMS with pediatric specialization',
        'State license for homeopathic practice',
        '3+ years pediatric experience',
        'Certification in child development',
        'Strong interpersonal skills with children and parents',
        'Bilingual (English/Spanish) preferred'
      ],
      responsibilities: [
        'Treat infants, children, and adolescents',
        'Work closely with families on treatment plans',
        'Maintain child-friendly clinic environment',
        'Collaborate with pediatric specialists',
        'Participate in community health programs',
        'Document treatment outcomes'
      ]
    },
    {
      id: 'clinic-manager',
      title: 'Clinic Operations Manager',
      department: 'Administration',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$60,000 - $80,000',
      experience: '3+ years',
      description: 'We need an experienced operations manager to oversee daily clinic operations, staff management, and ensure excellent patient experience.',
      requirements: [
        'Bachelor\'s degree in Healthcare Administration or related field',
        '3+ years healthcare management experience',
        'Knowledge of medical billing and coding',
        'Experience with practice management software',
        'Strong leadership and organizational skills',
        'Understanding of homeopathic practice preferred'
      ],
      responsibilities: [
        'Oversee daily clinic operations',
        'Manage administrative staff',
        'Ensure compliance with healthcare regulations',
        'Implement quality improvement initiatives',
        'Handle patient relations and feedback',
        'Manage clinic budget and resources'
      ]
    },
    {
      id: 'research-coordinator',
      title: 'Clinical Research Coordinator',
      department: 'Research',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$55,000 - $75,000',
      experience: '2+ years',
      description: 'Support our clinical research initiatives in homeopathy. Help advance the scientific understanding of homeopathic medicine through well-designed studies.',
      requirements: [
        'Master\'s degree in Life Sciences or related field',
        '2+ years clinical research experience',
        'Knowledge of GCP and regulatory requirements',
        'Experience with clinical trial management',
        'Strong analytical and writing skills',
        'Interest in complementary medicine research'
      ],
      responsibilities: [
        'Coordinate clinical research studies',
        'Recruit and screen study participants',
        'Collect and analyze research data',
        'Prepare research reports and publications',
        'Ensure regulatory compliance',
        'Collaborate with research team and external partners'
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fileType: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => ({ ...prev, [fileType]: file }));
    }
  };

  const removeFile = (fileType: string) => {
    setUploadedFiles(prev => {
      const newFiles = { ...prev };
      delete newFiles[fileType];
      return newFiles;
    });
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', { applicationData, uploadedFiles });
    alert('Application submitted successfully!');
    setShowApplicationForm(false);
    setApplicationData({
      jobId: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      currentSalary: '',
      expectedSalary: '',
      noticePeriod: '',
      coverLetter: '',
      linkedinProfile: '',
      portfolioUrl: ''
    });
    setUploadedFiles({});
  };

  const benefits = [
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Continuing education support, conference attendance, and certification programs'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with a team of passionate healthcare professionals dedicated to natural healing'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Competitive salary, performance bonuses, and comprehensive benefits package'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible scheduling, paid time off, and support for maintaining healthy work-life balance'
    }
  ];

  const handleApply = (jobId: string) => {
    setApplicationData(prev => ({ ...prev, jobId }));
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Briefcase className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Join Our Team</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Be part of a mission-driven organization dedicated to advancing natural healthcare. 
              Discover rewarding career opportunities in homeopathic medicine and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Why Work With Us */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-heading">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Job Openings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 font-heading">Current Openings</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job List */}
            <div className="lg:col-span-1 space-y-4">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className={`bg-white rounded-xl p-6 shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedJob === job.id ? 'ring-2 ring-primary-500 bg-primary-50' : ''
                  }`}
                  onClick={() => setSelectedJob(job.id)}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-primary-600 font-medium">{job.experience} required</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2">
              {selectedJob ? (
                <motion.div
                  key={selectedJob}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl shadow-lg p-8"
                >
                  {(() => {
                    const job = jobOpenings.find(j => j.id === selectedJob)!;
                    return (
                      <>
                        <div className="mb-6">
                          <h2 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h2>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center space-x-1">
                              <Briefcase className="w-4 h-4" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="w-4 h-4" />
                              <span>{job.salary}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{job.description}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Requirements</h3>
                            <ul className="space-y-2">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Responsibilities</h3>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, index) => (
                                <li key={index} className="flex items-start space-x-2">
                                  <div className="w-2 h-2 bg-success-600 rounded-full mt-2 flex-shrink-0" />
                                  <span className="text-gray-700 text-sm">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                          <button
                            onClick={() => handleApply(job.id)}
                            className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                          >
                            <Send className="w-5 h-5" />
                            <span>Apply Now</span>
                          </button>
                          <button className="flex-1 border-2 border-primary-600 text-primary-600 py-3 px-6 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                            Save Job
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <Briefcase className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Select a Position</h3>
                  <p className="text-gray-500">Click on any job opening to view details and apply</p>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Application Form Modal */}
        {showApplicationForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Apply for {jobOpenings.find(job => job.id === applicationData.jobId)?.title}
                  </h2>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmitApplication} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="firstName"
                            value={applicationData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                            placeholder="Enter your first name"
                          />
                          <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={applicationData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={applicationData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                            placeholder="your.email@example.com"
                          />
                          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            name="phone"
                            value={applicationData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                            placeholder="+1 (555) 123-4567"
                          />
                          <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Years of Experience *
                        </label>
                        <select
                          name="experience"
                          value={applicationData.experience}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                        >
                          <option value="">Select experience</option>
                          <option value="0-1">0-1 years</option>
                          <option value="2-3">2-3 years</option>
                          <option value="4-5">4-5 years</option>
                          <option value="6-10">6-10 years</option>
                          <option value="10+">10+ years</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Notice Period
                        </label>
                        <select
                          name="noticePeriod"
                          value={applicationData.noticePeriod}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                        >
                          <option value="">Select notice period</option>
                          <option value="immediate">Immediate</option>
                          <option value="15-days">15 days</option>
                          <option value="1-month">1 month</option>
                          <option value="2-months">2 months</option>
                          <option value="3-months">3 months</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Current Salary (Optional)
                        </label>
                        <input
                          type="text"
                          name="currentSalary"
                          value={applicationData.currentSalary}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="e.g., $50,000"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expected Salary
                        </label>
                        <input
                          type="text"
                          name="expectedSalary"
                          value={applicationData.expectedSalary}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="e.g., $60,000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          name="linkedinProfile"
                          value={applicationData.linkedinProfile}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Portfolio/Website URL
                        </label>
                        <input
                          type="url"
                          name="portfolioUrl"
                          value={applicationData.portfolioUrl}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cover Letter *
                        </label>
                        <textarea
                          name="coverLetter"
                          value={applicationData.coverLetter}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* File Uploads */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
                    <div className="space-y-4">
                      {/* Resume Upload */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Resume/CV * (PDF, DOC, DOCX - Max 5MB)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                          {uploadedFiles.resume ? (
                            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-6 h-6 text-primary-600" />
                                <span className="text-sm font-medium">{uploadedFiles.resume.name}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile('resume')}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          ) : (
                            <div>
                              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => handleFileUpload(e, 'resume')}
                                className="hidden"
                                id="resume-upload"
                                required
                              />
                              <label
                                htmlFor="resume-upload"
                                className="bg-primary-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-primary-700 transition-colors"
                              >
                                Choose File
                              </label>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Cover Letter Upload */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cover Letter (Optional - PDF, DOC, DOCX)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                          {uploadedFiles.coverLetter ? (
                            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-6 h-6 text-primary-600" />
                                <span className="text-sm font-medium">{uploadedFiles.coverLetter.name}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile('coverLetter')}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          ) : (
                            <div>
                              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => handleFileUpload(e, 'coverLetter')}
                                className="hidden"
                                id="cover-letter-upload"
                              />
                              <label
                                htmlFor="cover-letter-upload"
                                className="bg-gray-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
                              >
                                Choose File
                              </label>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Additional Documents */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Documents (Optional - Certificates, Portfolio, etc.)
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                          {uploadedFiles.additional ? (
                            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-6 h-6 text-primary-600" />
                                <span className="text-sm font-medium">{uploadedFiles.additional.name}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile('additional')}
                                className="text-red-500 hover:text-red-700"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </div>
                          ) : (
                            <div>
                              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600 mb-2">Click to upload or drag and drop</p>
                              <input
                                type="file"
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                                onChange={(e) => handleFileUpload(e, 'additional')}
                                className="hidden"
                                id="additional-upload"
                              />
                              <label
                                htmlFor="additional-upload"
                                className="bg-gray-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
                              >
                                Choose File
                              </label>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                    <button
                      type="button"
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}

        {/* Application Process */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-heading">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application and resume through our online portal</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">Our HR team reviews your qualifications and experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600 text-sm">Meet with our team through phone, video, or in-person interviews</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Welcome Aboard</h3>
              <p className="text-gray-600 text-sm">Join our team and begin your journey in natural healthcare</p>
            </div>
          </div>
        </motion.section>

        {/* Contact for Opportunities */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4 font-heading">Don't See the Right Position?</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for natural healthcare. 
            Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
              <Send className="w-5 h-5" />
              <span>Send Resume</span>
            </button>
            <a
              href="mailto:careers@home-en-live.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CareersPage;