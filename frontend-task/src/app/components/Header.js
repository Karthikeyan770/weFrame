const Header = () => (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo">WeFrameTech</div>
      <input
        type="text"
        placeholder="Rechercher un produit"
        className="border p-2 rounded-md"
      />
      <nav>
        <ul className="flex gap-4">
          <li>Inspiration</li>
          <li>Mes favoris</li>
          <li>Panier</li>
        </ul>
      </nav>
    </header>
  );
  
  export default Header;
  