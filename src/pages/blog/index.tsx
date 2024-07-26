import ArticleCard from "@/components/article-card";
import Footer from "@/components/scroll/Footer";
import Curve from "@/components/transition/Curve";

const articles = [
  {
    image: "a.jpg",
    title: "How to Invest in Real Estate",
    date: "July 24, 2024",
    intro:
      "Learn the basics of real estate investment and how to get started in this lucrative market.",
    link: "/articles/how-to-invest-in-real-estate",
  },
  {
    image: "b.jpg",
    title: "The Future of Urban Living",
    date: "July 22, 2024",
    intro:
      "Explore the trends shaping the future of urban living and what it means for you.",
    link: "/articles/future-of-urban-living",
  },
  {
    image: "c.jpg",
    title: "Sustainable Building Practices",
    date: "July 20, 2024",
    intro:
      "Discover the latest trends in sustainable building practices and how they are shaping the future.",
    link: "/articles/sustainable-building-practices",
  },
  {
    image: "d.jpg",
    title: "Real Estate Market Trends",
    date: "July 18, 2024",
    intro:
      "Stay updated with the latest trends in the real estate market and make informed investment decisions.",
    link: "/articles/real-estate-market-trends",
  },
  {
    image: "e.jpg",
    title: "Home Renovation Tips",
    date: "July 16, 2024",
    intro:
      "Get practical tips and ideas for renovating your home to increase its value and appeal.",
    link: "/articles/home-renovation-tips",
  },
  {
    image: "f.jpg",
    title: "The Impact of Technology on Real Estate",
    date: "July 14, 2024",
    intro:
      "Explore how technology is transforming the real estate industry and what it means for the future.",
    link: "/articles/impact-of-technology-on-real-estate",
  },
];

function index() {
  return (
    <Curve>
      <div className="container mx-auto pt-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
      <Footer />
    </Curve>
  );
}

export default index;