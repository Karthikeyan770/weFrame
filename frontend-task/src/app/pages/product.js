import Header from '../components/Header';
import Footer from '../components/Footer';
import SubscriptionSection from '../components/SubscriptionSection';

const Product = () => (
  <>
    <Header />
    <main className="p-8">
      <section className="product-detail">
        <h1>Cheese – appareil à raclette 1/2 roue</h1>
        <p>39,50€ / pièce</p>
        <p>Boîtier de chauffe horizontal réglable en hauteur</p>
      </section>
    </main>
    <SubscriptionSection />
    <Footer />
  </>
);

export default Product;
