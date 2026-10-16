

import React, { useEffect, useState } from "react";

import "./card.css";


const foodSearches = [
  "avocado healthy food",
  "berries healthy food",
  "nuts healthy food",
  "green salad healthy food",
];

// FALLBACK FOOD IMAGES

// These are used if the API does not return an image.
// This means your website can still display properly.


const fallbackFoods = [
  {
    name: "Avocado",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578",
  },

  {
    name: "Berries",
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e",
  },

  {
    name: "Nuts",
    image:
      "https://images.unsplash.com/photo-1599599810694-b5ac7a6c6c8f",
  },

  {
    name: "Green Salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
];



// MAIN COMPONENT


function Card() {

  // STATE FOR FOOD IMAGES
  

  const [foods, setFoods] = useState([]);

  // STATE FOR LOADING


  const [loading, setLoading] = useState(true);


  
  // FUNCTION TO SCROLL TO A SECTION

  const scrollToSection = (sectionId) => {

    const section =
      document.getElementById(sectionId);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  };


  // FETCH IMAGES FROM UNSPLASH API

  useEffect(() => {

    const apiKey =
      import.meta.env.VITE_UNSPLASH_ACCESS_KEY;


    // FUNCTION TO FETCH FOOD IMAGES

    async function getFoodImages() {

      // If there is no API key, use fallback images

      if (!apiKey) {

        console.warn(
          "Unsplash API key was not found. Using fallback images."
        );

        setFoods(fallbackFoods);

        setLoading(false);

        return;
      }


      try {


        // Create one request for every food
        

        const requests = foodSearches.map(
          async (food) => {

            const response = await fetch(
              `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
                food
              )}&per_page=1&client_id=${apiKey}`
            );


            // Check if request was successful

            if (!response.ok) {

              throw new Error(
                "Unable to fetch images from Unsplash."
              );

            }


            return response.json();

          }
        );



        // Wait for all API requests
        

        const results =
          await Promise.all(requests);

        // Convert API results into our food objects
        

        const images = results.map(
          (result, index) => {

            const apiImage =
              result.results?.[0]?.urls?.regular;


            return {

              name: foodSearches[index],

              image:
                apiImage ||
                fallbackFoods[index].image,

            };

          }
        );

        setFoods(images);

      } catch (error) {


        console.error(
          "Error loading Unsplash images:",
          error
        );

        setFoods(fallbackFoods);

      } finally {

        setLoading(false);

      }

    }


    // Run function

    getFoodImages();

  }, []);

  return (

    <main className="page-container">

      <section className="nutrition-card">

        <div className="card-content">


          {/* Small label */}

          <span className="hero-label">

            Healthy Eating for a Healthy Pregnancy

          </span>


          {/* Main heading */}

          <h1>

            Nourish You

            <br />

            &amp; Your Baby

          </h1>


          {/* Description */}

          <p>

            Eating nutritious foods during pregnancy
            supports your health and helps your baby
            grow strong and healthy.

          </p>



          <div className="card-buttons">


            {/* Nutrition button */}

            <button
              type="button"
              className="primary-btn"
              onClick={() =>
                scrollToSection("nutrition-guide")
              }
            >

              Explore Nutrition Guide

              <span>→</span>

            </button>


            {/* Meal planner button */}

            <button
              type="button"
              className="secondary-btn"
              onClick={() =>
                scrollToSection("meal-planner")
              }
            >

              View Meal Planner

              <span>→</span>

            </button>


          </div>

        </div>



        <div className="card-image">

          <img
            src="./src/assets/images/image.png"
            alt="Pregnant woman"
          />

        </div>

      </section>




      <section
        className="features"
        id="nutrition-guide"
      >


        {/* Feature 1 */}

        <div className="feature-item">

          <div className="feature-icon yellow">
            🍎
          </div>

          <div>

            <h3>
              Nutrition-rich
            </h3>

            <p>
              Recipes
            </p>

          </div>

        </div>


        {/* Feature 2 */}

        <div className="feature-item">

          <div className="feature-icon green">
            ✓
          </div>

          <div>

            <h3>
              Trusted
            </h3>

            <p>
              Experts
            </p>

          </div>

        </div>


        {/* Feature 3 */}

        <div className="feature-item">

          <div className="feature-icon pink">
            ♡
          </div>

          <div>

            <h3>
              Support
            </h3>

            <p>
              Every Stage
            </p>

          </div>

        </div>

      </section>




      <section className="food-section">


        {/* Section title */}

        <div className="section-heading">

          <h2>
            Healthy Foods
          </h2>

          <p>
            Discover nutritious foods for you and your baby.
          </p>

        </div>


        {/* Food grid */}

        <div className="food-grid">


          {/* Loading message */}

          {loading && (

            <p className="loading">

              Loading healthy foods...

            </p>

          )}


          {/* Food cards */}

          {!loading &&
            foods.map((food, index) => (

              <div
                className="food-card"
                key={index}
              >

                <img
                  src={food.image}
                  alt={food.name}
                />

                <div className="food-name">

                  {food.name}

                </div>

              </div>

            ))}

        </div>

      </section>




      <section
        className="meal-planner"
        id="meal-planner"
      >


        {/* Text */}

        <div className="planner-content">

          <span className="planner-label">

            MamaNutri Guide

          </span>


          <h2>

            Simple Meal Planner

          </h2>


          <p>

            Plan balanced meals with healthy foods
            that support you and your baby during pregnancy.

          </p>

        </div>


        {/* Button */}

        <button
          type="button"
          className="planner-btn"
          onClick={() =>
            scrollToSection("nutrition-guide")
          }
        >

          Explore Foods →

        </button>

      </section>


    </main>

  );

}



export default Card;