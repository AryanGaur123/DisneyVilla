# Luxury Airbnb Landing Page

A modern, minimalist landing page built with React and Tailwind CSS for showcasing a luxury 5-bedroom, 4.5-bath Airbnb property near Disney World.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean, minimalist design with sharp edges and sophisticated styling
- **Interactive Elements**: Image carousel, smooth scrolling navigation
- **Google Maps Integration**: Interactive map with accurate distances to attractions
- **Sections Include**:
  - Hero section with full-width property image
  - Detailed property description
  - Premium amenities with icons
  - Photo gallery
  - Guest reviews
  - Location information with accurate distances to attractions
  - Call-to-action booking section

## Technologies Used

- React.js
- Tailwind CSS for styling
- React Icons for icon components
- React Responsive Carousel for image gallery
- Google Maps API for interactive maps and distance calculations

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Google Maps API key

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd luxury-airbnb
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up your Google Maps API key
   - Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the following APIs in your Google Cloud Console:
     - Maps JavaScript API
     - Places API
     - Geocoding API
     - Distance Matrix API
   - Create a `.env` file in the root directory of the project
   - Add your API key to the `.env` file:
     ```
     REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key_here
     ```

4. Start the development server
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Customization

- **Images**: 
  - Place your hero image at `/public/images/hero.jpg`
  - Add carousel images as `/public/images/image1.png` through `/public/images/image10.png`

- **Property Details**:
  - Update property details in the `Description.js` component
  - Modify amenities in the `Amenities.js` component
  - Update booking links and contact information

- **Location**:
  - The property address is set to "16049 Blue Wave Way, Clermont, FL"
  - Distances to attractions are accurately calculated based on this address
  - You can update the address in the `Map.js` component if needed

## Deployment

To build the app for production:

```
npm run build
```

This creates an optimized production build in the `build` folder that can be deployed to any static hosting service.

**Important**: When deploying to production, make sure to:
1. Set up environment variables for your Google Maps API key on your hosting platform
2. Restrict your Google Maps API key to only your website's domain for security

## License

This project is available for private use.
