import React from "react";
import Img1 from "./images/image1.jpeg";
import Img2 from "./images/image2.jpeg";
import Img3 from "./images/image3.jpg";
import Img4 from "./images/image4.jpg";
import Img5 from "./images/image5.jpg";
import Img6 from "./images/image6.jpg";
import Img7 from "./images/image7.jpg";
import Img8 from "./images/image8.jpg";
import Img9 from "./images/image9.jpg";
import Img10 from "./images/image10.jpg";
import { useState } from "react";
const Cards = () => {
  const [blogs, setBlogs] = useState([
    {
      image: Img1,
      category: "Gaming, business",
      date: "15, October 2023",
      author: "Karake Omar",
      title: "What&rsquo;s new with gaming",
      content:
        "The series consists of eighteen main installments and several spin-offs , including the mobile game Pro Evolution Soccer Club Manager. Listed as one of the best-selling video game franchise",
      id: 1,
    },
    {
      image: Img2,
      category: "Technology, Gadgets",
      date: "20, October 2023",
      author: "Sophia Johnson",
      title: "The Latest Tech Gadgets",
      content:
        "Discover the most cutting-edge technology gadgets, from smartwatches to augmented reality headsets, in this comprehensive review.",
      id: 2,
    },
    {
      image: Img3,
      category: "Science, Space",
      date: "25, October 2023",
      author: "Dr. John Anderson",
      title: "Exploring the Mysteries of the Universe",
      content:
        "Delve into the cosmos as we unravel the secrets of dark matter, black holes, and the possibility of extraterrestrial life. Join us on this journey through the stars.",
      id: 3,
    },
    {
      image: Img4,
      category: "Health, Fitness",
      date: "30, October 2023",
      author: "Linda Smith",
      title: "Achieving Your Fitness Goals",
      content:
        "Learn about the most effective workout routines and nutrition plans to help you achieve your fitness goals.",
      id: 4,
    },
    {
      image: Img5,
      category: "Travel, Adventure",
      date: "5, November 2023",
      author: "David Williams",
      title: "Adventures in the Wilderness",
      content:
        "Embark on a thrilling journey through remote wilderness areas, discovering the beauty of nature.",
      id: 5,
    },
    {
      image: Img6,
      category: "Food, Cooking",
      date: "10, November 2023",
      author: "Emily Davis",
      title: "Culinary Delights Around the World",
      content:
        "Explore the diverse and delicious cuisines from various corners of the world.",
      id: 6,
    },
    {
      image: Img7,
      category: "Art, Culture",
      date: "15, November 2023",
      author: "Carlos Ramirez",
      title: "Artistic Expressions in Modern Culture",
      content:
        "Dive into the world of contemporary art and cultural expressions that shape our society.",
      id: 7,
    },
    {
      image: Img8,
      category: "Business, Finance",
      date: "20, November 2023",
      author: "Jennifer Clark",
      title: "Navigating the Financial World",
      content:
        "Get insights into the latest financial trends and strategies for success in the business world.",
      id: 8,
    },
    {
      image: Img9,
      category: "Education, Learning",
      date: "25, November 2023",
      author: "Michael Johnson",
      title: "The Future of Learning",
      content:
        "Discover innovative approaches to education and the evolving landscape of learning in the digital age.",
      id: 9,
    },
    {
      image: Img10,
      category: "Environment, Sustainability",
      date: "30, November 2023",
      author: "Emma Turner",
      title: "Sustainable Living for a Greener Planet",
      content:
        "Learn how to make sustainable choices that contribute to a healthier and greener planet.",
      id: 10,
    },
  ]);
  return (
    <div className="cards">
      {blogs.map((blog) => (
        <div className="card1" key={blog.id}>
          <img src={blog.image} alt="image" />
          <div className="category-date">
            <div className="category">{blog.category}</div>
            <div className="date">{blog.date}</div>
          </div>
          <div className="author">{blog.author}</div>
          <div className="title">{blog.title}</div>
          <div className="card-content">
            <p>{blog.content}</p>
          </div>
          <div className="view-post">View post</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
