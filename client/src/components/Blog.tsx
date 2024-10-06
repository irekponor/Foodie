import berry from "../assets/berry.jpg";

const data = [
  {
    img: <img src={berry} alt="" />,
    title: "Healthy Living",
    date: "Oct 2, 2024",
    comment: "11",
  },
  {
    img: <img src={berry} alt="" />,
    title: "World Hygiene Day",
    date: "Mar 17, 2024",
    comment: "7",
  },
  {
    img: <img src={berry} alt="" />,
    title: "National Fruits Day",
    date: "Aug 19, 2024",
    comment: "1",
  },
];

const Blog = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-600">
        Recent posts to show fun moments of your blog
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((d) => (
          <div className="space-y-4">
            <div className="rounded-lg hover:scale-105 transition-transform">
              {d.img}
            </div>
            <div className="text-color1 font-medium">
              <span>{d.date} / </span>
              <span className="cursor-pointer">{d.comment} Comments </span>
            </div>
            <h3 className="font-bold text-xl">{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
