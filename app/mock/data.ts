// Mock data for Schoolpal AI website

export const features = [
  {
    id: 1,
    title: "Works Completely Offline",
    description:
      "No internet? No problem. Schoolpal AI runs entirely on your device, making it perfect for rural students and areas with limited connectivity.",
    icon: "Wifi",
  },
  {
    id: 2,
    title: "Curriculum-Focused Learning",
    description:
      "Unlike ChatGPT, Schoolpal stays laser-focused on your prescribed curriculum. No distractions, just targeted learning.",
    icon: "BookOpen",
  },
  {
    id: 3,
    title: "Built-in Parental Controls",
    description:
      "Parents can monitor progress, set study schedules, and ensure safe learning environments for their children.",
    icon: "Shield",
  },
  {
    id: 4,
    title: "Conversation-Based Learning",
    description:
      "Students can ask questions naturally and receive instant, contextual answers that help build understanding.",
    icon: "MessageCircle",
  },
  {
    id: 5,
    title: "Completely Free",
    description:
      "No cost, no subscriptions, no hidden fees. Our non-profit mission is to make quality AI education accessible to every student.",
    icon: "Heart",
  },
  {
    id: 6,
    title: "Easy File Integration",
    description:
      "Simply upload your study materials and Schoolpal AI will analyze and comprehend the content for targeted Q&A.",
    icon: "FileText",
  },
] as const;

export const howItWorksSteps = [
  {
    id: 1,
    title: "Upload Your Materials",
    description:
      "Teachers or students upload curriculum files, textbooks, or study materials into Schoolpal AI's workspace.",
    icon: "Upload",
  },
  {
    id: 2,
    title: "AI Analyzes Content",
    description:
      "Our AI comprehensively analyzes and understands the uploaded content, creating a focused knowledge base.",
    icon: "Brain",
  },
  {
    id: 3,
    title: "Ask Questions & Learn",
    description:
      "Students can ask any questions related to the content and receive instant, accurate responses that build understanding.",
    icon: "MessageSquare",
  },
  {
    id: 4,
    title: "Track Progress",
    description:
      "Parents and teachers can monitor learning progress and identify areas where students need additional support.",
    icon: "TrendingUp",
  },
] as const;

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Grade 8 Student",
    location: "Rural Rajasthan",
    content:
      "Schoolpal AI helped me understand math concepts that I couldn't grasp in class. Now I can study even when there's no internet!",
    rating: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Teacher",
    location: "Government School, UP",
    content:
      "This tool has revolutionized how my students learn. They're more engaged and asking better questions than ever before.",
    rating: 5,
  },
  {
    id: 3,
    name: "Meera Patel",
    role: "Parent",
    location: "Gujarat",
    content:
      "Finally, an AI tool I can trust with my child's education. The parental controls give me peace of mind.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dr. Amit Singh",
    role: "NGO Director",
    location: "Education for All",
    content:
      "Schoolpal AI is bridging the digital divide. We've deployed it in 50+ rural schools with amazing results.",
    rating: 5,
  },
] as const;

export const pricingPlans = [
  {
    id: 1,
    name: "For Individual Students",
    price: "Free",
    period: "Forever",
    features: [
      "Offline AI tutoring",
      "Curriculum-focused responses",
      "Basic parental controls",
      "File upload capability",
      "Progress tracking",
      "Community support",
    ],
    popular: false,
  },
  {
    id: 2,
    name: "For Classrooms",
    price: "Free",
    period: "Forever",
    features: [
      "All individual features",
      "Teacher dashboard",
      "Bulk content management",
      "Advanced analytics",
      "Priority community support",
      "Teacher training resources",
    ],
    popular: true,
  },
  {
    id: 3,
    name: "For Schools & NGOs",
    price: "Free",
    period: "Forever",
    features: [
      "All classroom features",
      "Multi-grade support",
      "Custom curriculum integration",
      "Admin controls",
      "Dedicated support channel",
      "Implementation assistance",
    ],
    popular: false,
  },
] as const;

export const contactInfo = {
  email: "",
  phone: "",
  address: "",
  socialMedia: {
    twitter: "@schoolpalai",
    linkedin: "schoolpal-ai",
    instagram: "schoolpalai",
  },
} as const;
