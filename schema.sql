DROP DATABASE IF EXISTS cnc_reservations;

CREATE DATABASE cnc_reservations;

USE cnc_reservations;

CREATE TABLE listings (
  id int NOT NULL AUTO_INCREMENT,
  price_per_night int NOT NULL,
  name_of_owner TEXT (255) NOT NULL,
  min_nights int NOT NULL,
  max_guests int NOT NULL,
  service_fee int NOT NULL,
  occupational_fee int NOT NULL,
  municipal_info TEXT (255) NOT NULL,
  reviews int NOT NULL,
  review_count int NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE bookings (
  id int NOT NULL AUTO_INCREMENT,
  listing_id integer NOT NULL,
  name VARCHAR(255) NOT NULL,
  month_of_booking int NOT NULL,
  start_date int NOT NULL,
  duration int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (listing_id)
    REFERENCES listings(id)
);

-- do we need total price... I bet I can generate that by adding up the different parts (nights times price per night
-- -- plus each of the other fees)

-- INSERT INTO listings (id, price_per_night, min_nights, max_guests, service_fee, occupational_fee, 
-- municipal_info, cleaning_fee, reviews, review_count) VALUES (1, 109.99, 2, 4, 25.00, 15.00, 
-- "The beautiful beach-side town of Caracas", 25.00, 4.33, 218);

-- INSERT INTO listings (price_per_night, min_nights, max_guests, service_fee, occupational_fee, 
-- municipal_info, cleaning_fee, reviews, review_count) VALUES (259.99, 4, 8, 25.00, 15.00, 
-- "Downtown urban center of San Francisco", 25.00, 3.25, 399);

-- -- INSERT INTO listings (id, price_per_night, min_nights, max_guests, service_fee, occupational_fee, 
-- -- municipal_info, cleaning_fee, reviews, review_count) VALUES (3, 109.99, 2, 4, 25.00, 15.00, 
-- -- "The beautiful beach-side town of Caracas", 25.00, 4.33, 218);

-- INSERT INTO bookings (id, listing_id, name, month_of_booking, start_date, duration, number_of_guests, 
-- final_price) VALUES (1, (SELECT id FROM listings WHERE id = 2), 'Bob Loblaw', 5, 6, 3, 4, 777);

-- INSERT INTO bookings (listing_id, name, month_of_booking, start_date, duration, number_of_guests, 
-- final_price) VALUES ((SELECT id FROM listings WHERE id = 2), 'Maurice', 5, 6, 3, 4, 777);