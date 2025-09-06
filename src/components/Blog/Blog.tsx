// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";

// // const mockPosts = [
// //   {
// //     id: 1,
// //     title: "How to Choose the Right Course Abroad in 2025",
// //     excerpt:
// //       "A step-by-step approach to aligning your academic interests with high-impact global programs.",
// //     image:
// //       "https://images.unsplash.com/photo-1523246191915-3eaca6f3048e?q=80&w=1200&auto=format&fit=crop",
// //     category: "Guides",
// //     tag: "Trending",
// //     date: "2025-08-10",
// //     author: "Team Edukonnect",
// //     readTime: "6 min",
// //     featured: true,
// //   },
// //   {
// //     id: 2,
// //     title: "Scholarships You Can Still Apply For (Fall ’25)",
// //     excerpt:
// //       "Deadlines, eligibility, and how to make your application stand out to committees.",
// //     image:
// //       "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop",
// //     category: "Finance",
// //     tag: "Latest",
// //     date: "2025-08-12",
// //     author: "Aarav Shah",
// //     readTime: "4 min",
// //   },
// //   {
// //     id: 3,
// //     title: "Visa Interview: 11 Questions You Must Prepare For",
// //     excerpt:
// //       "The exact structure interviewers expect—and how to stay calm and concise.",
// //     image:
// //       "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop",
// //     category: "Visas",
// //     tag: "Popular",
// //     date: "2025-08-11",
// //     author: "Pooja Nair",
// //     readTime: "5 min",
// //   },
// //   {
// //     id: 4,
// //     title: "UK vs USA vs Canada: Which Fits Your Goals?",
// //     excerpt:
// //       "Compare tuition, internships, PR pathways, and graduate outcomes at a glance.",
// //     image:
// //       "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
// //     category: "Destinations",
// //     tag: "Trending",
// //     date: "2025-08-05",
// //     author: "Team Edukonnect",
// //     readTime: "7 min",
// //   },
// //   {
// //     id: 5,
// //     title: "Perfect SOP Framework (Free Template Inside)",
// //     excerpt:
// //       "A crisp, repeatable structure that has worked for 1,000+ successful admits.",
// //     image:
// //       "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=1200&auto=format&fit=crop",
// //     category: "Applications",
// //     tag: "Popular",
// //     date: "2025-08-01",
// //     author: "Riya Mehta",
// //     readTime: "8 min",
// //   },
// // ];

// // const tabs = ["Trending", "Latest", "Popular"];

// // const Badge = ({ children }) => (
// //   <span className="inline-flex items-center gap-1 rounded-full bg-[#8cc63f] px-2.5 py-1 text-xs font-medium text-white shadow-md">
// //     {children}
// //   </span>
// // );

// // const Card = ({ post, large = false }) => {
// //   return (
// //     <motion.article
// //       whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
// //       transition={{ type: "spring", stiffness: 200 }}
// //       className={`group overflow-hidden rounded-2xl border border-gray-200 bg-white/90  transition shadow-2xl border-[#8cc63f] ${
// //         large ? "md:col-span-2" : ""
// //       }`}
// //     >
// //       <div className={`relative ${large ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
// //         <img
// //           src={post.image}
// //           alt={post.title}
// //           className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
// //           loading="lazy"
// //         />
// //         <div className="absolute left-3 top-3">
// //           <Badge>{post.tag}</Badge>
// //         </div>
// //       </div>

// //       <div className="space-y-2 p-5">
// //         <div className="flex items-center gap-2 text-xs text-gray-500">
// //           <span>{post.category}</span>
// //           <span>•</span>
// //           <span>{new Date(post.date).toLocaleDateString()}</span>
// //           <span>•</span>
// //           <span>{post.readTime}</span>
// //         </div>
// //         <h3
// //           className={`font-semibold text-gray-900 group-hover:text-black transition ${
// //             large ? "text-xl" : "text-lg"
// //           }`}
// //         >
// //           <a href="#" className="hover:underline">
// //             {post.title}
// //           </a>
// //         </h3>
// //         <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
// //         <div className="pt-2 text-sm text-emerald-700">
// //           <a
// //             href="#"
// //             className="inline-flex items-center gap-1 hover:gap-2 transition-all"
// //           >
// //             Read more →
// //           </a>
// //         </div>
// //       </div>
// //     </motion.article>
// //   );
// // };

// // export default function TrendingBlog() {
// //   const [activeTab, setActiveTab] = useState("Trending");

// //   const featured = useMemo(
// //     () => mockPosts.find((p) => p.featured) || mockPosts[0],
// //     []
// //   );
// //   const secondary = useMemo(
// //     () => mockPosts.filter((p) => !p.featured).slice(0, 2),
// //     []
// //   );

// //   const filtered = useMemo(
// //     () => mockPosts.filter((p) => p.tag === activeTab),
// //     [activeTab]
// //   );

// //   return (
// //     <div className="bg-white">
// //       {/* Hero */}
// //       <section className="relative bg-black text-white overflow-hidden">
// //         <motion.div
// //           initial={{ y: 40, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.8 }}
// //           className="mx-auto max-w-7xl px-4 py-16"
// //         >
// //           <p className="text-white text-sm font-medium">
// //             EduKonnect Blog
// //           </p>
// //           <motion.h1
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.3, duration: 0.8 }}
// //             className="mt-2 text-4xl font-bold md:text-5xl text-[#8cc63f]"
// //           >
// //             Explore <span className="text-white">Trending</span> Reads
// //           </motion.h1>
// //           <p className="mt-4 max-w-2xl text-gray-300">
// //             Guides, scholarships, visas, and everything you need for a smooth
// //             study abroad journey.
// //           </p>
// //         </motion.div>
// //       </section>

// //       {/* Tabs */}
// //       <div className="sticky top-0 z-10 border-b bg-white/50 backdrop-blur-xl">
// //         <div className="mx-auto max-w-7xl px-4">
// //           <div className="flex items-center gap-3 py-3">
// //             {tabs.map((t) => (
// //               <button
// //                 key={t}
// //                 onClick={() => setActiveTab(t)}
// //                 className={`rounded-full px-4 py-2 text-sm font-medium transition ${
// //                   activeTab === t
// //                     ? "bg-[#8cc63f] text-white shadow-md"
// //                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
// //                 }`}
// //               >
// //                 {t}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Featured + Secondary */}
// //       <section className="mx-auto max-w-7xl px-4 py-8">
// //         <div className="grid gap-6 md:grid-cols-3">
// //           <Card post={featured} large />
// //           {secondary.map((p) => (
// //             <Card key={p.id} post={p} />
// //           ))}
// //         </div>
// //       </section>

// //       {/* Grid */}
// //       <section className="mx-auto max-w-7xl px-4 pb-12">
// //         <div className="mb-4 flex items-center gap-2">
// //           <h2 className="text-xl font-semibold text-gray-900">{activeTab}</h2>
// //           <span className="text-sm text-gray-500">/ posts</span>
// //         </div>
// //         <motion.div
// //           initial="hidden"
// //           animate="visible"
// //           variants={{
// //             hidden: { opacity: 0 },
// //             visible: {
// //               opacity: 1,
// //               transition: { staggerChildren: 0.15 },
// //             },
// //           }}
// //           className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
// //         >
// //           {filtered.map((p) => (
// //             <motion.div
// //               key={p.id}
// //               variants={{
// //                 hidden: { opacity: 0, y: 30 },
// //                 visible: { opacity: 1, y: 0 },
// //               }}
// //               transition={{ duration: 0.6 }}
// //             >
// //               <Card post={p} />
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </section>
// //     </div>
//   );
// }



import React from "react";

const blogs = [
  {
    id: 1,
    title: "Project Management for Modern Teams",
    date: "August 1, 2019",
    image:
      "https://source.unsplash.com/400x250/?team,project", // replace with real image
    description:
      "Discover the modern techniques of project management that keep teams productive and agile.",
  },
  {
    id: 2,
    title: "Why Soft Skills Are Essential for Your Career Growth",
    date: "August 3, 2019",
    image: "https://source.unsplash.com/400x250/?career,skills",
    description:
      "Learn why communication, leadership, and adaptability matter more than ever in today’s workplace.",
  },
  {
    id: 3,
    title: "Advanced Python Programming Techniques",
    date: "August 5, 2019",
    image: "https://source.unsplash.com/400x250/?python,code",
    description:
      "Take your Python skills to the next level with these powerful tips and techniques.",
  },
  {
    id: 4,
    title: "Courses Guiding Momentum This Year",
    date: "August 6, 2019",
    image: "https://source.unsplash.com/400x250/?courses,learning",
    description:
      "Check out the trending courses that are shaping students’ careers in 2023.",
  },
  {
    id: 5,
    title: "Introduction to Digital Marketing",
    date: "August 7, 2019",
    image: "https://source.unsplash.com/400x250/?marketing,digital",
    description:
      "Digital marketing is more than just ads — explore strategies to grow online.",
  },
  {
    id: 6,
    title: "Mobile App Development with React",
    date: "August 9, 2019",
    image: "https://source.unsplash.com/400x250/?react,mobile",
    description:
      "Build modern mobile apps using React and streamline your development process.",
  },
];

const categories = [
  "Education Courses",
  "Online Learning",
  "Skill Development",
  "Tech & Programming",
];

const recentPosts = [
  "Market Learning Trends to Watch in 2023",
  "Top 10 Online Courses This Quarter",
  "Education Trending Topics",
];

const tags = ["education", "python", "marketing", "react", "web development"];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left: Blog list */}
      <div className="md:col-span-2 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                <button className="text-[#2563eb] text-sm font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
            1
          </button>
          <button className="px-3 py-1 rounded bg-blue-600 text-white">
            2
          </button>
          <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
            3
          </button>
          <span className="px-3 py-1">...</span>
          <button className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
            10
          </button>
        </div>
      </div>

      {/* Right: Sidebar */}
      <aside className="space-y-8">
        {/* Search */}
        <div className="bg-white shadow rounded-xl p-4">
          <h4 className="font-semibold text-gray-700 mb-3">Search</h4>
          <input
            type="text"
            placeholder="Find by category"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Category */}
        <div className="bg-white shadow rounded-xl p-4">
          <h4 className="font-semibold text-gray-700 mb-3">Category</h4>
          <ul className="space-y-2">
            {categories.map((cat, i) => (
              <li key={i} className="text-gray-600 hover:text-blue-600 text-sm">
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div className="bg-white shadow rounded-xl p-4">
          <h4 className="font-semibold text-gray-700 mb-3">Recent Posts</h4>
          <ul className="space-y-2">
            {recentPosts.map((post, i) => (
              <li key={i} className="text-gray-600 hover:text-blue-600 text-sm">
                {post}
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="bg-white shadow rounded-xl p-4">
          <h4 className="font-semibold text-gray-700 mb-3">Popular Tags</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Blog;
