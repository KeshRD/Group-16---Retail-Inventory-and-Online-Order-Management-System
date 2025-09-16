import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

// Import icons (requires: npm install react-icons)
import { FaShoppingCart, FaUser, FaSearch, FaStar, FaHeart, FaRegHeart, FaTimes } from 'react-icons/fa';
import { BsLightningChargeFill } from 'react-icons/bs';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [notification, setNotification] = useState({ show: false, message: '' });
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
  'https://www.simplytek.lk/cdn/shop/files/band_10_2800_x_1000_px.png?v=1756289181&width=2800',
  'https://celltronics.lk/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-11-at-10.15.25-AM-0x0.webp',
  'https://celltronics.lk/wp-content/uploads/2025/08/watch-8-classic-0x0.webp'
];

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, 2000); // Change slide every 5 seconds

  return () => clearInterval(interval);
}, []);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'phones', name: 'Phones & Tablets' },
    { id: 'wearables', name: 'Wearables' },
    { id: 'speakers', name: 'Speakers' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: 'Apple 20W USB-C Power Adapter',
      price: 7499,
      originalPrice: 9999,
      image: 'https://www.simplytek.lk/cdn/shop/files/Apple-20W-Original-Adapter-Price-in-Srilanka-1-simplytek-lk.jpg?v=1698205176&width=1220',
      category: 'accessories',
      rating: 4.9,
      featured: true,
      description: 'Fast charging power adapter for Apple devices.',
      colors: []
    },
    {
      id: 2,
      name: 'Apple AirPods Pro (2nd Generation)',
      price: 66999,
      originalPrice: 71999,
      image: 'https://www.simplytek.lk/cdn/shop/files/AIRPODS-Pro-2nd-gen-simplytek-lk-1.png?v=1694426217&width=1220',
      category: 'accessories',
      rating: 5.0,
      featured: false,
      description: 'Advanced noise cancellation and superior sound quality.',
      colors: []
    },
    {
      id: 3,
      name: 'JBL PartyBox Encore 2 Speaker',
      price: 120999,
      originalPrice: 125999,
      image: 'https://www.simplytek.lk/cdn/shop/files/JBL_Partybox_Encore_Essential_2_Simplytek-lk-sri-lanka_6.jpg?v=1757479184&width=610',
      category: 'speakers',
      rating: 5.0,
      featured: false,
      description: 'Better sounds.Let\'s Party.360 Sounds.Original JBL Sound.',
      colors: []
    },
    {
      id: 4,
      name: 'Apple Watch SE 2',
      price: 71999,
      originalPrice: null,
      image: 'https://www.simplytek.lk/cdn/shop/files/apple-watchse-silver-simplytek-lk.jpg?v=1701843068&width=610',
      category: 'wearables',
      rating: 5.0,
      featured: true,
      description: 'Track your fitness and stay connected with style.',
      colors: ['Gray', 'Gold', 'Silver']
    },
    {
      id: 5,
      name: 'Xiaomi Mijia Electric Kettle 2',
      price: 7999,
      originalPrice: null,
      image: 'https://www.simplytek.lk/cdn/shop/files/Xiaomi-Mijia-Electric-Kettle-2-Simplytek-lk-sri-lanka_2.webp?v=1711954475&width=610',
      category: 'Home Items',
      rating: 5.0,
      featured: true,
      description: 'Compact smart Kettle.',
      colors: ['White', 'Blue', 'Gray', 'Orange', 'Yellow']
    },
    {
      id: 6,
      name: 'Xiaomi Mi Portable Photo Printer Paper (2x3-inch, 50-sheets)',
      price: 4499,
      originalPrice: 5999,
      image: 'https://www.simplytek.lk/cdn/shop/files/Mi-Pocket-Photo-Printer-ZINC-Photo-Paper-Sri-Lanka-1_7fa6c759-1003-474b-88b4-07a117ffbb8b.jpg?v=1748947917&width=610',
      category: 'accessories',
      rating: 5.0,
      featured: true,
      description: '3-inch pocket photo printer dedicated photo paper',
      colors: []
    },
    {
      id: 7,
      name: 'Apple iPhone 16 Pro Max 256GB [DIRECT IMPORT]',
      price: 364999,
      originalPrice: null,
      image: 'https://smartmobile.lk/image/cache/catalog/Apple%20iPhone%2016%20Pro%20Max-500x500.jpg',
      category: 'phones',
      rating: 5.0,
      featured: false,
      description: 'The iPhone 16 Pro Max introduces a Grade 5 titanium design, featuring a refined microblasted finish that not only enhances its aesthetic appeal but also its durability. Titanium is renowned for its exceptional strength-to-weight ratio, making the iPhone 16 Pro Max incredibly strong while remaining impressively light. Available in four stunning colors, including the new Desert Titanium, this phone is as much a fashion statement as it is a technological marvel.',
      colors: ['White Titanium', 'Blue Titanium', 'Gray Titanium']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = products.filter(product => product.featured).filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showNotification(`${product.name} added to cart`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const toggleWishlist = (product) => {
    if (wishlist.some(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      showNotification(`${product.name} removed from wishlist`);
    } else {
      setWishlist([...wishlist, product]);
      showNotification(`${product.name} added to wishlist`);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
      return;
    }
    setCart(prevCart => prevCart.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toLocaleString();
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
  };

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.show]);

  return (
    <Router>
      <div className="app">
        {/* Notification */}
        <div className={`notification ${notification.show ? 'show' : ''}`}>
          {notification.message}
        </div>

        {/* Header */}
        <header className="header">
          <div className="container">
            <div className="logo">
              <BsLightningChargeFill className="logo-icon" />
              <span>Bright Buy</span>
            </div>
            
            <nav className="nav">
              {categories.map(category => (
                <Link 
                  key={category.id}
                  to="/"
                  className={activeCategory === category.id ? 'active' : ''}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Link>
              ))}
              <Link to="/contact" className={activeCategory === 'contact' ? 'active' : ''}>
                Contact Us
              </Link>
            </nav>
            
            <div className="header-actions">
              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
              <button className="account-btn">
                <FaUser />
              </button>
              <button className="cart-btn" onClick={() => setCartOpen(true)}>
                <FaShoppingCart />
                {totalCartItems > 0 && <span className="cart-count">{totalCartItems}</span>}
              </button>
            </div>
          </div>
        </header>

        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                {/* Hero Section */}
                <section className="hero">
                  <div className="container">
                    <div className="hero-content">
                      <h1>Next Generation Electronics</h1>
                      <p>Discover the latest tech innovations with unbeatable prices and premium quality</p>
                      <div className="hero-buttons">
                        <button className="cta-btn primary">Shop Now</button>
                        <button className="cta-btn secondary">View Deals</button>
                      </div>
                    </div>
                    <div className="hero-image">
                      <img 
                        src={heroImages[currentSlide]} 
                        alt="Latest Electronics" 
                        className="hero-slide"
                      />
                      <div className="hero-slide-indicators">
                        {heroImages.map((_, index) => (
                          <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Featured Products */}
                <section className="featured-section">
                  <div className="container">
                    <h2>Featured Products</h2>
                    <div className="products-grid">
                      {featuredProducts.map(product => (
                        <div key={product.id} className="product-card">
                          <div className="product-image">
                            <img src={product.image} alt={product.name} />
                            <button 
                              className="wishlist-btn"
                              onClick={() => toggleWishlist(product)}
                            >
                              {wishlist.some(item => item.id === product.id) ? <FaHeart /> : <FaRegHeart />}
                            </button>
                            {product.featured && <span className="featured-badge">Featured</span>}
                          </div>
                          <div className="product-info">
                            <h3>
                              <Link to={`/product/${product.id}`} className="product-link">
                                {product.name}
                              </Link>
                            </h3>
                            <div className="product-rating">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
                              ))}
                              <span>({product.rating})</span>
                            </div>
                            <div className="product-price-container">
                              <span className="current-price">Rs {product.price.toLocaleString()}</span>
                              {product.originalPrice && (
                                <span className="original-price">Rs {product.originalPrice.toLocaleString()}</span>
                              )}
                            </div>
                            <button 
                              className="add-to-cart-btn"
                              onClick={() => addToCart(product)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Products Section */}
                <section className="products-section">
                  <div className="container">
                    <h2>Browse Products</h2>
                    <div className="products-grid">
                      {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                          <div className="product-image">
                            <img src={product.image} alt={product.name} />
                            <button 
                              className="wishlist-btn"
                              onClick={() => toggleWishlist(product)}
                            >
                              {wishlist.some(item => item.id === product.id) ? <FaHeart /> : <FaRegHeart />}
                            </button>
                          </div>
                          <div className="product-info">
                            <h3>
                              <Link to={`/product/${product.id}`} className="product-link">
                                {product.name}
                              </Link>
                            </h3>
                            <div className="product-rating">
                              {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
                              ))}
                              <span>({product.rating})</span>
                            </div>
                            <div className="product-price-container">
                              <span className="current-price">Rs {product.price.toLocaleString()}</span>
                              {product.originalPrice && (
                                <span className="original-price">Rs {product.originalPrice.toLocaleString()}</span>
                              )}
                            </div>
                            <button 
                              className="add-to-cart-btn"
                              onClick={() => addToCart(product)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            } 
          />
          <Route 
            path="/product/:id" 
            element={
              <ProductDetails 
                products={products} 
                addToCart={addToCart} 
                toggleWishlist={toggleWishlist} 
                wishlist={wishlist} 
              />
            } 
          />
          <Route 
            path="/contact" 
            element={<ContactUs />} 
          />
        </Routes>

        {/* Shopping Cart Sidebar */}
        <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
          <div className="cart-header">
            <h3>Your Cart ({totalCartItems})</h3>
            <button className="close-cart" onClick={() => setCartOpen(false)}>
              <FaTimes />
            </button>
          </div>
          
          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p className="current-price">Rs {item.price.toLocaleString()}</p>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <button 
                      className="remove-item"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FaTimes />
                    </button>
                  </div>
                ))}
              </>
            )}
          </div>
          
          {cart.length > 0 && (
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total:</span>
                <span>Rs {getTotalPrice()}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          )}
        </div>

        {/* Overlay when cart is open */}
        {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}></div>}

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Bright Buy Electronics</h4>
                <p>Your trusted source for the latest electronics and gadgets at competitive prices.</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/#products">Products</Link></li>
                  <li><Link to="/#about">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Contact Info</h4>
                <p>Email: info@brightbuy.com</p>
                <p>Phone: +94 (11) 123-4567</p>
                <p>Address: 123 Tech Street, Colombo, Sri Lanka</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Bright Buy Electronics. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function ProductDetails({ products, addToCart, toggleWishlist, wishlist }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <section className="product-details">
        <div className="container">
          <p className="text-center text-gray-500">Product not found</p>
        </div>
      </section>
    );
  }

  const isInWishlist = wishlist.some(item => item.id === product.id);

  return (
    <section className="product-details">
      <div className="container">
        <div className="product-detail-container">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <div className="product-rating">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(product.rating) ? 'filled' : ''} />
              ))}
              <span>({product.rating})</span>
            </div>
            <div className="price-display">
              <span className="current-price">Rs {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="original-price">Rs {product.originalPrice.toLocaleString()}</span>
              )}
            </div>
            <p className="product-description">{product.description}</p>
            {product.colors.length > 0 && (
              <div className="colors-section">
                <h3 className="colors-title">Available Colors:</h3>
                <ul className="colors-list">
                  {product.colors.map(color => (
                    <li key={color}>{color}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="product-actions">
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button 
                className="wishlist-detail-btn"
                onClick={() => toggleWishlist(product)}
              >
                {isInWishlist ? <FaHeart /> : <FaRegHeart />} Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactUs() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>We’re here to assist you with all your electronics needs. Reach out to us via the following contact details.</p>
            <ul className="contact-details">
              <li>
                <strong>Email:</strong> <a href="mailto:info@brightbuy.com">info@brightbuy.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+94111234567">+94 (11) 123-4567</a>
              </li>
              <li>
                <strong>Address:</strong> 123 Tech Street, Colombo, Sri Lanka
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;