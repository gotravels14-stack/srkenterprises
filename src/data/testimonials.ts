export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Rajesh Malhotra",
    role: "Project Manager (Piping Division)",
    company: "L&T Heavy Engineering",
    content: "SKR Enterprises has been an outstanding contracting partner. Their high-pressure piping welders are top-tier and their safety standards are exemplary. We completed our refinery pipeline expansion 5 days ahead of schedule.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Vikram Sengupta",
    role: "Lead Maintenance Engineer",
    company: "NTPC Limited",
    content: "During our thermal power station's annual shutdown, SKR Enterprises handled the boiler tube repair and replacement work. The execution team worked round-the-clock and maintained absolute compliance with safety protocols. Highly recommended.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Arun K. Sharma",
    role: "Operations Director",
    company: "UltraTech Cement",
    content: "We engaged SKR Enterprises for heavy structural fabrication and erection of our hopper systems. The precision in mechanical alignment was excellent, and their supervisors managed the crane rigging flawlessly.",
    rating: 5
  },
  {
    id: "test-4",
    name: "Sanjay Singhania",
    role: "Deputy General Manager",
    company: "IFFCO Fertilizer",
    content: "Managing shutdown timelines in fertilizer plants is extremely critical. SKR Enterprises has consistently provided exceptional manpower and executed maintenance contracts with absolute efficiency and high quality.",
    rating: 5
  }
];
