
---
# React E-commerce Project

This is a responsive e-commerce web application built using React. The application fetches product data from a mock API and provides a seamless shopping experience with features like product listing, filtering, sorting, and a shopping cart. The project is hosted on Netlify and can be viewed [here](https://672bbf0ceb7d0828b5d8cf87--subtle-marigold-6f43d7.netlify.app/).

## Project Setup

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone e-commerce-app
   ```
2. **Install dependencies:**
   ```bash
   cd e-commerce-app
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm start
   ```
4. **View the application:**  
   Open your browser and go to `http://localhost:5173` to view the application.

## Features

### 1. Product Listing

- **API Fetching**: Product data is fetched from a mock API from https://api.escuelajs.co/api/v1/categories. For development purposes, `json-server` or a similar service is used to simulate API responses.
- **Grid Layout**: Products are displayed in a grid layout, each showing the product image, name, price, and an "Add to Cart" button.
- **Infinite Scrolling/Pagination**: To improve the browsing experience, products can be loaded dynamically with infinite scrolling or pagination.

### 2. Filtering and Sorting

- **Filtering**: A sidebar contains filters, allowing users to narrow down products by category and price range.
- **Sorting**: Users can sort products by criteria such as price or popularity.
- **Combined Functionality**: Filters and sorting work seamlessly together for a refined search experience.

### 3. Shopping Cart

- **Cart Component**: Displays items added to the cart, with the ability to see item quantities and the total price.
- **Add/Remove Items**: Users can add products to the cart and remove them as needed.
- **State Management**: React Context or Redux is used to manage cart state across the application, ensuring efficient data handling.

### 4. Styling and Responsiveness

- **Responsive Design**: The layout is fully responsive, ensuring a consistent and intuitive experience across mobile, tablet, and desktop screens.
- **Aesthetic Design**: Thoughtful design choices were made to ensure visual coherence and a pleasant user experience.

### 5. Performance Optimization

- **Code Splitting & Lazy Loading**: Code splitting and lazy loading are implemented to enhance the app's initial load time.
- **React Optimization Hooks**: React.memo, useMemo, and useCallback are used where applicable to optimize re-renders.
- **Image Lazy Loading**: Product images are lazy-loaded, further enhancing performance by reducing initial load time.

### 6. API Integration and Error Handling

- **Error Handling**: API errors are handled gracefully with user-friendly messages.
- **Loading States**: Loading indicators are shown while data is being fetched to enhance the user experience.
- **Efficient Data Fetching**: React Query (or SWR) is used for data fetching and caching, reducing redundant API calls and improving overall performance.

## Technologies Used

- **Frontend**: React, React Context/Redux, React Query (or SWR)
- **Styling**: Styled-components (or Emotion)
- **Performance**: React.memo, useMemo, useCallback
- **Data Fetching**: Mock API with json-server (or similar service)
- **Deployment**: [Netlify](https://netlify.com/)

## Future Improvements

- Enhanced search functionality.
- Integration with a real API.
- User authentication and account management.
- Wishlist functionality.

## Live Demo

You can view the live version of the project on Netlify [here](https://672bbf0ceb7d0828b5d8cf87--subtle-marigold-6f43d7.netlify.app/).
---