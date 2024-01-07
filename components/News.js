import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import './News.css';
import defaultImage from '../logo.svg';

const News = () => {
  const [newsData, setNewsData] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English
  const [selectedCategory, setSelectedCategory] = useState('general'); // Default category is General
  let response = '';

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
    }, 300); // Adjust the debounce delay as needed
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
        const apiKey = 'q0uUJXqXuSu1OP4CRJDAdV5w9umpi9U6Oko4uTFxK6BVreek';

        if(selectedCategory === 'science'){
          response = await axios.get(
            `https://news-api-5wv3.onrender.com/news`
          );
        }else{
        response = await axios.get(
          `https://api.currentsapi.services/v1/latest-news?apiKey=${apiKey}&language=${selectedLanguage}&country=in&category=${selectedCategory}`
        );
        }

        if (!cancelRequest) {
          const groupedNews = {};
          response.data.news.forEach((article) => {
            const source = article.title || 'Unknown Source';
            if (!groupedNews[source]) {
              groupedNews[source] = [];
            }
            groupedNews[source].push(article);
          });

          setNewsData(groupedNews);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();

    return () => {
      cancelRequest = true;
    };
  }, [selectedLanguage, selectedCategory]);

  const categories = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  return (
    <div className="container">
      <h1>Latest News from India</h1>
      <div className="radio-group">
        <label>
          Select Language:
          <input
            type="radio"
            value="en"
            checked={selectedLanguage === 'en'}
            onChange={handleLanguageChange}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="hi"
            checked={selectedLanguage === 'hi'}
            onChange={handleLanguageChange}
          />
          Hindi
        </label>
        {/* Add more radio options as needed */}
      </div>
      {/* <div className="category-select">
        <label>
          Select Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div> */}
      <div className="news-header">
        {categories.map((category) => (
          <div key={category} className={`header-category ${selectedCategory === category ? 'active' : ''}`} onClick={() => setSelectedCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </div>
        ))}
      </div>
      <div className="news-container">
        {Object.keys(newsData).map((source, index) => (
          <React.Fragment key={index}>
            {newsData[source].map((article, articleIndex) => (
              <div key={articleIndex} className="news-box">
                <div className="news-content">
                  {article.image ? (
                    <img
                      src={article.image}
                      alt={article.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.it/150x150';
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
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default News;
