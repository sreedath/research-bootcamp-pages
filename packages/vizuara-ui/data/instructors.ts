import type { InstructorItem, BookCallout } from "../types/bootcamp";

export const INSTRUCTOR_SREEDATH: Omit<InstructorItem, "session"> = {
  name: "Dr. Sreedath Panat",
  photo: "/instructors/SreedathP.png",
  role: "Co-founder, Vizuara AI Labs",
  bio: "PhD from MIT, B.Tech from IIT Madras. 10+ years of research experience. Dr. Panat brings deep technical expertise from both academia and industry to make complex AI concepts accessible and practical.",
  badge: "MIT PhD",
  universities: [
    { src: "/logos/mit-logo.png", alt: "MIT", width: 80 },
    { src: "/logos/iitmadras-logo.png", alt: "IIT Madras", width: 120 },
  ],
  linkedin: "https://in.linkedin.com/in/sreedath-panat",
  scholar: "https://scholar.google.com/citations?user=qq8OirYAAAAJ&hl=en",
};

export const INSTRUCTOR_RAJ: Omit<InstructorItem, "session"> = {
  name: "Dr. Raj Dandekar",
  photo: "/instructors/Raj.jpeg",
  role: "Co-founder, Vizuara AI Labs",
  bio: "PhD from MIT, B.Tech from IIT Madras. Dr. Raj specializes in building LLMs from scratch, including DeepSeek-style architectures. His expertise spans AI agents, scientific machine learning, and end-to-end model development.",
  badge: "MIT PhD",
  universities: [
    { src: "/logos/mit-logo.png", alt: "MIT", width: 80 },
    { src: "/logos/iitmadras-logo.png", alt: "IIT Madras", width: 120 },
  ],
  linkedin: "https://www.linkedin.com/in/raj-abhijit-dandekar-67a33118a/",
  scholar: "https://scholar.google.com/citations?user=xTLUWMIAAAAJ&hl=en",
};

export const INSTRUCTOR_RAJAT: Omit<InstructorItem, "session"> = {
  name: "Dr. Rajat Dandekar",
  photo: "/instructors/Rajat.png",
  role: "Co-founder, Vizuara AI Labs",
  bio: "PhD from Purdue University, B.Tech and M.Tech from IIT Madras. Dr. Rajat brings deep expertise in reinforcement learning and reasoning models, focusing on advanced AI techniques for real-world applications.",
  badge: "Purdue PhD",
  universities: [
    { src: "/logos/purdue-logo.png", alt: "Purdue University", width: 100 },
    { src: "/logos/iitmadras-logo.png", alt: "IIT Madras", width: 120 },
  ],
  linkedin: "https://www.linkedin.com/in/rajat-dandekar-901324b1/",
  scholar: "https://scholar.google.com/citations?user=bU7G7K8AAAAJ&hl=en",
};

export const DEEPSEEK_BOOK: BookCallout = {
  href: "https://www.manning.com/books/build-a-deepseek-model-from-scratch",
  image: "/deepseek-book.jpg",
  imageAlt: "Build a DeepSeek Model (From Scratch)",
  topLabel: "Manning #1 Best-Seller",
  title: "Build a DeepSeek Model (From Scratch)",
  authors: "By Dr. Raj Dandekar, Dr. Rajat Dandekar, Dr. Sreedath Panat & Naman Dwivedi",
};
