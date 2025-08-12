// Mock data for the healthcare clinic website

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  form: string;
  rating: number;
  reviews: number;
  description: string;
  ingredients: string[];
  usage: string;
  inStock: boolean;
  isOnSale?: boolean;
  salePercentage?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  faqs: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  faqs: FAQ[];
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  bio: string;
  specialization: string[];
  experience: string;
  education: string[];
  achievements: string[];
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  services: string[];
  doctors: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  feedback: string;
  condition: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

// Mock Products Data
export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Arnica Montana 30C',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    category: 'Pain Relief',
    brand: 'HomeoVital',
    form: 'Pellets',
    rating: 4.8,
    reviews: 156,
    description: 'Natural homeopathic remedy for bruises, sprains, and muscle soreness.',
    ingredients: ['Arnica Montana 30C'],
    usage: 'Take 3-5 pellets under tongue 3 times daily or as directed by physician.',
    inStock: true,
    isOnSale: true,
    salePercentage: 25
  },
  {
    id: '2',
    name: 'Calendula Cream',
    price: 450,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    category: 'Skin Care',
    brand: 'NaturalHeal',
    form: 'Cream',
    rating: 4.6,
    reviews: 89,
    description: 'Soothing calendula cream for cuts, wounds, and skin irritations.',
    ingredients: ['Calendula Officinalis', 'Natural Base'],
    usage: 'Apply thin layer to affected area 2-3 times daily.',
    inStock: true
  },
  {
    id: '3',
    name: 'Belladonna 200C',
    price: 320,
    image: 'https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg',
    category: 'Fever & Inflammation',
    brand: 'HomeoVital',
    form: 'Pellets',
    rating: 4.7,
    reviews: 124,
    description: 'Effective remedy for sudden onset fever and inflammatory conditions.',
    ingredients: ['Belladonna 200C'],
    usage: 'Take 3-5 pellets under tongue every 2 hours during acute symptoms.',
    inStock: true
  },
  {
    id: '4',
    name: 'Chamomilla 30C',
    price: 280,
    originalPrice: 350,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    category: 'Children\'s Health',
    brand: 'KidsHomeo',
    form: 'Liquid',
    rating: 4.9,
    reviews: 203,
    description: 'Gentle remedy for teething pain and irritability in children.',
    ingredients: ['Chamomilla 30C'],
    usage: 'Give 5 drops in water 3 times daily or as needed.',
    inStock: true,
    isOnSale: true,
    salePercentage: 20
  }
];

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Homeopathy: A Beginner\'s Guide',
    excerpt: 'Learn the fundamental principles of homeopathy and how it can benefit your health naturally.',
    content: 'Homeopathy is a system of natural medicine that has been used for over 200 years. Based on the principle of "like cures like," homeopathy uses highly diluted substances to trigger the body\'s natural healing system. This gentle approach to healing focuses on treating the individual as a whole, rather than just addressing symptoms. Homeopathic remedies are prepared through a process of serial dilution and succussion, which is believed to enhance their therapeutic properties while minimizing side effects.',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    author: 'Dr. Sarah Wilson',
    date: '2024-01-15',
    category: 'Alternative Medicine',
    readTime: '5 min read',
    tags: ['homeopathy', 'natural healing', 'wellness'],
    faqs: [
      {
        question: 'Is homeopathy safe for children?',
        answer: 'Yes, homeopathy is generally considered safe for children when prescribed by a qualified practitioner.'
      },
      {
        question: 'How long does homeopathic treatment take?',
        answer: 'Treatment duration varies depending on the condition and individual response, typically ranging from a few weeks to several months.'
      }
    ]
  },
  {
    id: '2',
    title: 'Natural Remedies for Common Cold and Flu',
    excerpt: 'Discover effective homeopathic treatments to boost your immunity and recover faster from seasonal illnesses.',
    content: 'The common cold and flu are among the most frequent health complaints, especially during seasonal changes. Homeopathy offers several effective remedies that can help reduce symptoms and speed recovery. Oscillococcinum is widely used for flu-like symptoms, while Aconitum napellus works well for sudden onset cold symptoms. Gelsemium is excellent for flu with weakness and fatigue. These remedies work by stimulating the body\'s natural defense mechanisms, helping you recover more quickly and naturally.',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    author: 'Dr. Michael Chen',
    date: '2024-01-10',
    category: 'Chronic Diseases',
    readTime: '4 min read',
    tags: ['cold', 'flu', 'immunity', 'natural remedies'],
    faqs: [
      {
        question: 'Can I take homeopathic remedies with conventional medicine?',
        answer: 'Generally yes, but always consult with your healthcare provider before combining treatments.'
      },
      {
        question: 'When should I start taking remedies for cold symptoms?',
        answer: 'It\'s best to start as soon as you notice the first symptoms for maximum effectiveness.'
      }
    ]
  }
];

// Services Data
export const services: Service[] = [
  {
    id: '1',
    name: 'General Consultation',
    description: 'Comprehensive homeopathic consultation for various health conditions with personalized treatment plans.',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
    price: '₹800',
    duration: '45 minutes',
    faqs: [
      {
        question: 'What should I expect during my first consultation?',
        answer: 'A detailed discussion about your health history, current symptoms, and lifestyle factors.'
      },
      {
        question: 'How often do I need follow-up appointments?',
        answer: 'Typically every 4-6 weeks, depending on your condition and response to treatment.'
      }
    ]
  },
  {
    id: '2',
    name: 'Chronic Disease Management',
    description: 'Specialized treatment for chronic conditions like diabetes, hypertension, arthritis, and autoimmune disorders.',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
    price: '₹1200',
    duration: '60 minutes',
    faqs: [
      {
        question: 'Can homeopathy help with diabetes management?',
        answer: 'Yes, homeopathy can help improve blood sugar control and reduce complications when used alongside conventional care.'
      },
      {
        question: 'How long does treatment for chronic conditions take?',
        answer: 'Chronic conditions typically require 6-12 months of consistent treatment for significant improvement.'
      }
    ]
  }
];

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    designation: 'Chief Medical Officer & Senior Homeopath',
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg',
    bio: 'Dr. Sarah Wilson is a distinguished homeopathic physician with over 15 years of clinical experience. She completed her BHMS from the prestigious National Institute of Homeopathy and later pursued advanced training in classical homeopathy from the International Academy of Classical Homeopathy. Dr. Wilson specializes in treating chronic diseases, women\'s health issues, and pediatric conditions. Her patient-centered approach and deep understanding of homeopathic principles have helped thousands of patients achieve optimal health naturally.',
    specialization: ['Chronic Diseases', 'Women\'s Health', 'Autoimmune Disorders'],
    experience: '15+ years',
    education: ['BHMS - National Institute of Homeopathy', 'Advanced Classical Homeopathy Certification'],
    achievements: ['Published 25+ research papers', 'Speaker at International Homeopathy Conferences', 'Award for Excellence in Homeopathic Practice 2023']
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    designation: 'Pediatric Homeopath',
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
    bio: 'Dr. Michael Chen is a dedicated pediatric homeopath with a special focus on children\'s health and development. With 12 years of experience, he has successfully treated thousands of children for various conditions including ADHD, autism spectrum disorders, recurrent infections, and behavioral issues. Dr. Chen believes in gentle, non-invasive treatments that support the child\'s natural healing capacity while addressing the root cause of illness.',
    specialization: ['Pediatric Care', 'ADHD', 'Autism Spectrum Disorders', 'Child Development'],
    experience: '12+ years',
    education: ['BHMS - Government Homeopathic Medical College', 'Pediatric Homeopathy Specialization'],
    achievements: ['Certified Pediatric Homeopath', 'Research in Homeopathic Treatment of ADHD', 'Community Health Award 2022']
  }
];

// Clinics Data
export const clinics: Clinic[] = [
  {
    id: '1',
    name: 'Home-En-Live Central Clinic',
    address: '123 Wellness Street, Medical District, City - 400001',
    phone: '+91 98765 43210',
    email: 'central@homeenlive.com',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 4:00 PM',
    services: ['General Consultation', 'Chronic Disease Management', 'Women\'s Health'],
    doctors: ['Dr. Sarah Wilson', 'Dr. Michael Chen'],
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg'
  },
  {
    id: '2',
    name: 'Home-En-Live North Branch',
    address: '456 Health Avenue, North District, City - 400002',
    phone: '+91 98765 43211',
    email: 'north@homeenlive.com',
    hours: 'Mon-Fri: 10:00 AM - 6:00 PM, Sat: 9:00 AM - 5:00 PM',
    services: ['Pediatric Care', 'Mental Health', 'Skin & Hair Care'],
    doctors: ['Dr. Emily Johnson', 'Dr. James Rodriguez'],
    image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg'
  }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
    rating: 5,
    feedback: 'Dr. Wilson\'s treatment completely transformed my health. After years of chronic fatigue, I finally feel energetic and healthy again.',
    condition: 'Chronic Fatigue Syndrome'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    rating: 5,
    feedback: 'My son\'s ADHD symptoms have improved dramatically with Dr. Chen\'s homeopathic treatment. No side effects, just natural healing.',
    condition: 'ADHD in Children'
  }
];

// Knowledge Hub Categories
export const knowledgeHubCategories: Category[] = [
  {
    id: '1',
    name: 'Women\'s Health',
    description: 'Comprehensive health information for women of all ages',
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg',
    slug: 'womens-health'
  },
  {
    id: '2',
    name: 'Men\'s Health',
    description: 'Health topics specifically focused on men\'s wellness',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    slug: 'mens-health'
  },
  {
    id: '3',
    name: 'Child Care',
    description: 'Pediatric health and child development information',
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg',
    slug: 'child-care'
  },
  {
    id: '4',
    name: 'Mental Wellness',
    description: 'Mental health and emotional wellbeing resources',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
    slug: 'mental-wellness'
  },
  {
    id: '5',
    name: 'Chronic Diseases',
    description: 'Management and treatment of chronic health conditions',
    image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg',
    slug: 'chronic-diseases'
  },
  {
    id: '6',
    name: 'Alternative Medicine',
    description: 'Natural and alternative healing approaches',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    slug: 'alternative-medicine'
  }
];

// Product Categories Data
export const categories: Category[] = [
  {
    id: '1',
    name: 'Pain Relief',
    description: 'Natural remedies for pain management and relief',
    image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg',
    slug: 'pain-relief'
  },
  {
    id: '2',
    name: 'Skin Care',
    description: 'Homeopathic solutions for healthy skin',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    slug: 'skin-care'
  },
  {
    id: '3',
    name: 'Fever & Inflammation',
    description: 'Natural treatments for fever and inflammatory conditions',
    image: 'https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg',
    slug: 'fever-inflammation'
  },
  {
    id: '4',
    name: 'Children\'s Health',
    description: 'Safe and gentle remedies for children',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg',
    slug: 'childrens-health'
  }
];

// Why Choose Us Points
export const whyChooseUsPoints = [
  {
    icon: 'UserCheck',
    title: 'Expert Doctors',
    description: 'Certified homeopathic physicians with 10+ years experience'
  },
  {
    icon: 'Clock',
    title: '24/7 Support',
    description: 'Round-the-clock patient care and emergency consultation'
  },
  {
    icon: 'Shield',
    title: 'Trusted by Thousands',
    description: 'Over 50,000 satisfied patients across the country'
  },
  {
    icon: 'Heart',
    title: 'Affordable Care',
    description: 'Quality healthcare at reasonable prices for everyone'
  },
  {
    icon: 'Award',
    title: 'FDA Approved',
    description: 'All our remedies are FDA approved and quality tested'
  },
  {
    icon: 'Leaf',
    title: 'Natural Healing',
    description: 'Safe, gentle, and effective natural treatment methods'
  }
];

// Expanded Blog Posts for different categories
export const expandedBlogPosts: BlogPost[] = [
  ...blogPosts,
  {
    id: '3',
    title: 'Women\'s Health: Hormonal Balance Through Homeopathy',
    excerpt: 'Discover how homeopathic remedies can help restore hormonal balance naturally.',
    content: 'Hormonal imbalances affect millions of women worldwide, causing symptoms like irregular periods, mood swings, weight gain, and fatigue. Homeopathy offers a gentle yet effective approach to restoring hormonal balance. Remedies like Sepia, Pulsatilla, and Lachesis have shown remarkable results in treating various hormonal disorders. These natural medicines work by stimulating the body\'s own regulatory mechanisms, helping to restore balance without the side effects often associated with conventional hormone therapy.',
    image: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg',
    author: 'Dr. Emily Johnson',
    date: '2024-01-08',
    category: 'Women\'s Health',
    readTime: '6 min read',
    tags: ['hormones', 'women\'s health', 'natural treatment'],
    faqs: [
      {
        question: 'Can homeopathy help with menopause symptoms?',
        answer: 'Yes, homeopathy can effectively manage menopause symptoms like hot flashes, mood changes, and sleep disturbances.'
      },
      {
        question: 'Is homeopathic treatment safe during pregnancy?',
        answer: 'Many homeopathic remedies are safe during pregnancy, but always consult with a qualified practitioner first.'
      }
    ]
  },
  {
    id: '4',
    title: 'Mental Wellness: Anxiety and Depression Treatment',
    excerpt: 'Learn about homeopathic approaches to managing anxiety and depression naturally.',
    content: 'Mental health conditions like anxiety and depression are increasingly common in today\'s fast-paced world. Homeopathy offers a holistic approach to mental wellness, addressing not just symptoms but the underlying emotional and physical imbalances. Remedies such as Ignatia, Natrum muriaticum, and Arsenicum album have proven effective in treating various mental health conditions. The beauty of homeopathic treatment lies in its individualized approach, where the remedy is selected based on the person\'s unique symptom picture and constitutional type.',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
    author: 'Dr. James Rodriguez',
    date: '2024-01-05',
    category: 'Mental Wellness',
    readTime: '7 min read',
    tags: ['mental health', 'anxiety', 'depression', 'natural healing'],
    faqs: [
      {
        question: 'How effective is homeopathy for anxiety disorders?',
        answer: 'Homeopathy can be very effective for anxiety, often providing relief without the side effects of conventional medications.'
      },
      {
        question: 'Can children take homeopathic remedies for behavioral issues?',
        answer: 'Yes, homeopathy is safe and effective for children with behavioral and emotional challenges.'
      }
    ]
  }
];