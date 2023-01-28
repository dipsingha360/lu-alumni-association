const Blog = () => {
  const blogsData = [
    {
      img: "https://www.reliablesoft.net/wp-content/uploads/2019/12/free-images-for-blogs.jpg",
      title: "Demo title",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    },
  ];

  return blogsData.forEach((blog) => {
    <div className="blog flex justify-between items-center border border-indigo-100 p-2 rounded-lg w-96 h-26 ">
      <img src={blog.img} alt="" className="h-20 w-40 px rounded" />
      <div className="details flex flex-col gap-1 h-14 w-48 pl-2">
        <h2 className="title text-lg font-medium">{blog.title}</h2>
        <p className="description overflow-hidden text-xs ">
          {blog.description}
        </p>
      </div>
    </div>;
  });
};

export default Blog;
