// News.js

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./News.css";
import defaultImage from "../logo.svg";
import banner from "../images/banner.jpg";
import { Link } from "react-router-dom";


const News = () => {
  const [newsData, setNewsData] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState("Top Headlines");
  const [loading, setLoading] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  let response = "";

  const debouncedLanguageChange = useMemo(() => {
    const debounce = (fn, delay) => {
      let timeoutId;
      return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    };

    return debounce((value) => {
      setSelectedLanguage(value);
    }, 300);
  }, []);

  const handleLanguageChange = (event) => {
    debouncedLanguageChange(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  useEffect(() => {
    let cancelRequest = false;

    const fetchNews = async () => {
      try {
        setLoading(true);

        const apiKey = "q0uUJXqXuSu1OP4CRJDAdV5w9umpi9U6Oko4uTFxK6BVreek";

        if(selectedLanguage === 'en'){

          if (selectedCategory === "sports") {
            response = await axios.get(
              `https://news-api-5wv3.onrender.com/news/sport`
            );
          } else if (selectedCategory === "Top Headlines") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/national"
            );
          } else if (selectedCategory === "business") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/business"
            );
          } else if (selectedCategory === "entertainment") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/entertainment"
            );
          } else if (selectedCategory === "health") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/health"
            );
          } else if (selectedCategory === "science") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/science"
            );
          } else if (selectedCategory === "technology") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/tech"
            );
          } 
        }else if(selectedLanguage === 'hi'){
          if (selectedCategory === "sports") {
            response = await axios.get(
              `https://news-api-5wv3.onrender.com/news/hisport`
            );
          } else if (selectedCategory === "Top Headlines") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/hinational"
            );
          } else if (selectedCategory === "business") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/hibusiness"
            );
          } else if (selectedCategory === "entertainment") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/hientertainment"
            );
          } else if (selectedCategory === "health") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/hihealth"
            );
          } else if (selectedCategory === "science") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/hiscience"
            );
          } else if (selectedCategory === "technology") {
            response = await axios.get(
              "https://news-api-5wv3.onrender.com/news/hitech"
            );
          }
        }
  
          if (!cancelRequest) {
            const groupedNews = {};
            response.data.news.forEach((article) => {
              const source = article.title || "Unknown Source";
              if (!groupedNews[source]) {
                groupedNews[source] = [];
              }
              groupedNews[source].push(article);
            });
  
            setNewsData(groupedNews);
          }


      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();

    return () => {
      cancelRequest = true;
    };
  }, [selectedLanguage, selectedCategory]);

  const categories = [
    "Top Headlines",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  useEffect(() => {
    const scrollButton = document.getElementById("scroll-to-top");

    const handleScroll = () => {
      if (
        document.body.scrollTop > document.body.clientHeight * 2 ||
        document.documentElement.scrollTop > document.documentElement.clientHeight * 2
      ) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      <img className="container-fluid" src={banner} width="1200px" alt="Banner" />
      <div className="center-container">

      <div className="radio-group">
        <label>
          <br />
          Select Language:
          <input
            className="form-check-input radiobutton"
            value="en"
            checked={selectedLanguage === "en"}
            onChange={handleLanguageChange}
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          English
        </label>
        <label>
          <input
            className="form-check-input radiobutton"
            value="hi"
            checked={selectedLanguage === "hi"}
            onChange={handleLanguageChange}
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          Hindi
        </label>
        </div>
      </div>

      <div className="news-header">

      <div
  className={`hamburger-icon ${showMobileMenu ? "active" : ""}`}
  onClick={() => setShowMobileMenu(!showMobileMenu)}
>
  <span></span>
  <span></span>
  <span></span>
</div>

        <div className="header-categories rounded-pill">
          <div className="desktop-categories">
            {categories.map((category) => (
              <div
                key={category}
                className={`header-category rounded-pill ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            ))}
          </div>
          <div className="mobile-categories rounded-pill">
            <div
              className="header-category rounded-pill"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
              <i className={`fas fa-chevron-${showMobileMenu ? "up" : "down"}`}></i>
            </div>
            {showMobileMenu && (
              <div className="mobile-dropdown">
                {categories.map((category) => (
                  <div
                    key={category}
                    className={`header-category rounded-pill ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowMobileMenu(false);
                    }}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {loading && (
        <div className="loader-overlay">
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      <div className="news-container">
        {Object.keys(newsData).map((source, index) => (
          <React.Fragment key={index}>
            {newsData[source].map((article, articleIndex) => (
              <div className="col-md-3 p-1" key={articleIndex}>
                <div key={articleIndex} class="card">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      height="180vh"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.it/150x150";
                      }}
                    />
                  ) : (
                    <img
                      src={defaultImage}
                      alt="Default"
                      width="100"
                      height="100"
                    />
                  )}
                  <div class="card-body">
                    <h6 class="card-title">{article.title}</h6>
                    <p className="news-text">
                      {article.description
                        ? article.description
                        : article.summary}
                    </p>
                    <div>
                      <a
                        href={article.url ? article.url : article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>

      <div className="container mt-4">
        <footer className="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              {/* <a href="#" class="nav-link px-2 text-muted">
                Home
              </a> */}

              <Link to="/" className="nav-link px-2 text-muted">
              Home
            </Link>

            </li>
            <li class="nav-item">
              {/* <a href="#about" class="nav-link px-2 text-muted">
                About Us
              </a> */}
              <Link to="/about" className="nav-link px-2 text-muted">
              About Us
            </Link>
            </li>
            <li class="nav-item">
              {/* <a href="#contact" class="nav-link px-2 text-muted">
                Contact Us
              </a> */}
              <Link to="/contact" className="nav-link px-2 text-muted">
              Contact Us
            </Link>

            </li>
            <li class="nav-item">
              <a href="#terms" class="nav-link px-2 text-muted">
                Terms And Conditions
              </a>
            </li>
          </ul>
          <p class="text-center text-muted">© Latest Indian News</p>
        </footer>
      </div>

      <div id="scroll-to-top" title="Go To Top" onClick={scrollToTop}>
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
};

// Loader component
// const Loader = () => (
//   <div className="loader-container">
//     <div className="loader"></div>
//   </div>
// );

export default News;
