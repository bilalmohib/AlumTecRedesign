import Navbar from "@/app/Components/Navbar";
import ProductsBanner from "@/app/pageComponents/Products/ProductsBanner";
import ProductItem from "@/app/pageComponents/Products/ProductItem";
import { productsList } from "@/app/data/Products";
import Footer from "@/app/Components/Footer";

const ProductsPage = () => {
  return (
    <div>
      <Navbar />

      <section>
        <ProductsBanner />
        <div className="overflow-hidden mt-6">
          {productsList.map((item, index) => {
            return (
              <div key={index} className="my-6 lg:mt-0">
                <ProductItem
                  background={item.background}
                  direction={item.direction}
                  title={item.title}
                  descriptionList={item.descriptionList}
                  image={item.image}
                />
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default ProductsPage;
