# Mars Rover Image Explorer

This project is a simple web application that uses the Rover API to display images taken by the Perseverance rover on Mars. The application is built using React and Node.js.

## Features

- Display a slideshow of images from the Perseverance rover.
- Display a single image by its ID.
- Show image metadata when hovering over an image.
- Use of React Router for seamless navigation between different views:
    - The root URL (`/`) shows a slideshow of images.
    - A URL with a specific index (`/:index`) shows a single image.

The React Router is a crucial part of this application, providing the ability to navigate between different views without a page refresh. When a user visits the root URL (`/`), they see a slideshow that periodically cycles between images. If they visit a URL with a specific index (`/:index`), they see a single image.

This is achieved using the `<BrowserRouter>` and `<Route>` components from `react-router-dom`. The `<BrowserRouter>` wraps the entire application, and the `<Route>` components define the paths and the components to render at those paths.

## Installation and Usage

Before you start, make sure you have Node.js and npm installed on your machine. Follow the steps below to run the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/maumercado/mars-rover-image-explorer.git
    cd mars-rover-image-explorer
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

You can now access the application in your web browser at `http://localhost:3000`.

## Testing

This project uses the Jest testing framework and React Testing Library for component testing. To run the tests, use the following command:

```bash
npm test
```
