"use client";

import Footer from "@/components/footer/footer";
import Menu from "@/components/menu/menu";

const Blog = ({ params }: { params: { SingleBlog: string } }) => {
  return (
    <Menu>
      <main>Welcom to blog {params.SingleBlog}</main>
    </Menu>
  );
};

export default Blog;
