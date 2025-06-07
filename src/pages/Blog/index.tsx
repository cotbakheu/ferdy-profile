import classNames from "classnames";
import React from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router";

type BlogPost = {
  title: string;
  desc: string;
  date: string;
  author: string;
  img: string;
  tags: string[];
};

function Blog() {
  const [blogPost] = React.useState<BlogPost[]>([
    {
      title: "What does it take to become a web developer?",
      desc: "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…",
      date: "7 Oct 2024",
      author: "Ferdy",
      img: "/laptop.png",
      tags: ["Web Development"],
    },
    {
      title: "What does it take to become a web developer?",
      desc: "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…",
      date: "7 Oct 2024",
      author: "Ferdy",
      img: "/laptop.png",
      tags: ["Web Development"],
    },
    {
      title: "What does it take to become a web developer?",
      desc: "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…",
      date: "7 Oct 2024",
      author: "Ferdy",
      img: "/laptop.png",
      tags: ["Web Development"],
    },
  ]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={classNames("min-h-[90vh] p-8 xl:px-24")}>
      <div className="flex flex-col items-center justify-center">
        <span className="text-brand-primary text-4xl font-semibold flex items-center gap-4">
          <span className="text-5xl">
            <IoNewspaperOutline />
          </span>{" "}
          Blogs
        </span>
        <div className="flex items-center mt-4">
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
          <hr className="w-58 border border-brand-primary" />
          <div className="rounded-full w-2 h-2 bg-brand-primary"></div>
        </div>
        <p className="text-gray-200 text-xs mt-8">
          I rant (smartly) about tech & biz. Subscribe if you're into that.
        </p>
        <button className="rounded-full border border-brand-primary p-4 py-2 mt-10 hover:bg-brand-primary">
          Subscribe My Blogs
        </button>
      </div>
      <div className="mt-20 flex flex-col items-center justify-center gap-20">
        {blogPost.map((item, index) => (
          <div className="w-full lg:w-3/5" key={index}>
            <hr className="border border-gray-300" />
            <br />
            <div className="flex gap-10">
              <div className="hidden md:block">
                <img src={item.img} alt="gambar" />
              </div>
              <div>
                <Link to={"/"}>
                  <p className="text-brand-primary text-2xl hover:underline">
                    {item.title}
                  </p>
                </Link>
                <br />
                <div className="flex justify-center md:hidden">
                  <img src={item.img} alt="gambar" />
                </div>
                <br />
                <p className="text-sm">{item.desc}</p>
                <br />
                <div className="flex flex-wrap md:flex-row gap-10 items-center">
                  <div className="flex w-full md:w-auto gap-2">
                    {item.tags.map((el, index) => (
                      <div
                        key={index}
                        className="rounded-full bg-gray-600 py-1 px-2 text-xs"
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs">Author: {item.author}</p>
                  <p className="text-xs">Date: {item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
