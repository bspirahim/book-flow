import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Categories from "@/components/Categories/Categories";
import Products from "@/components/Products/Products";
import Review from "@/components/Review/Review";

export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <About></About>
      <Products></Products>
      <Categories></Categories>
      <Review></Review>
    </main>
  );
}
