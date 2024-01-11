// News.js

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./News.css";
import defaultImage from "../logo.svg";
import banner from "../images/banner.jpg";

const News = () => {
  const [newsData, setNewsData] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [selectedCategory, setSelectedCategory] = useState("Top Headlines");
  const [loading, setLoading] = useState(false); // New state for loader
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
        setLoading(true); // Set loading to true when service call starts

        const apiKey = "q0uUJXqXuSu1OP4CRJDAdV5w9umpi9U6Oko4uTFxK6BVreek";

        if (selectedCategory === "sports") {
          response = await axios.get(
            `https://news-api-5wv3.onrender.com/sports`
          );
        } else if (selectedCategory === "Top Headlines") {
          response = await axios.get(
            "https://news-api-5wv3.onrender.com/news/national"
          );
        } else {
          response = await axios.get(
            `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}&language=${selectedLanguage}&country=in&category=${selectedCategory}`
          );
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
        setLoading(false); // Set loading to false when service call completes
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

  return (
    <div className="container">
      <img src={banner} ></img>
      
      <div className="radio-group">
        <label><br></br>
          Select Language: 
          <input
            class="form-check-input radiobutton"
            value="en"
            checked={selectedLanguage === "en"}
            onChange={handleLanguageChange}
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          {/* <input
            type="radio"
            value="en"
            checked={selectedLanguage === 'en'}
            onChange={handleLanguageChange}
          /> */}
          English
        </label>
        <label>
          <input
            class="form-check-input radiobutton"
            value="hi"
            checked={selectedLanguage === "hi"}
            onChange={handleLanguageChange}
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          {/* <input
            type="radio"
            value="hi"
            checked={selectedLanguage === 'hi'}
            onChange={handleLanguageChange}
          /> */}
          Hindi
        </label>
        {/* Add more radio options as needed */}
      </div>
      <div className="news-header rounded-pill">
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
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      <div className="news-container">
        {/* Display loader if loading is true */}
        {Object.keys(newsData).map((source, index) => (
          <React.Fragment key={index}>
            {newsData[source].map((article, articleIndex) => (
              <div class="col-md-3 p-1">
                <div key={articleIndex} class="card">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
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

      <NewsFooter />           

    </div>
  );
};

// Loader component
const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);

// Define your NewsFooter component
const NewsFooter = () => (
  <footer className="news-footer">
    <p>&copy; 2024 Indian Latest News. All rights reserved.</p>
  </footer>
);

export default News;
