import Navbar from "@/app/Components/Navbar";
import ProductsBanner from "@/app/pageComponents/Products/ProductsBanner";
import ProductItem from "@/app/pageComponents/Products/ProductItem";
import { productsList } from "@/app/data/Products";

const ProductsPage = () => {
  return (
    <div>
      <Navbar />

      <section>
        <ProductsBanner />
        <div className="overflow-hidden">
          {productsList.map((item, index) => {
            return (
              <div key={index}>
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
    </div>
  );
};
export default ProductsPage;
