
# To run and install project follow this commands

### npm install
### npm run dev

# Fetchin posts composable explanation:

#### The composable allows you to load posts from a paginated API using infinite scroll. It keeps track of the posts, the current page, and whether more data is available. You just call loadMore() whenever you want to fetch more posts — usually when the user scrolls near the bottom. It also ensures that it does not reload while it's still waiting for a response. When there are no posts, stop fetching data and displaying the "No more posts" message.

# Added feature and comments

- The website is fully multilingual, offering support for multiple languages to provide a seamless experience for users around the world.
- Pinia is configured and ready for use, although the current stage of the project does not yet require centralized state management.
- TypeScript is used throughout the project to help catch potential runtime errors early and improve code maintainability.
- A suitable home page design has been created to introduce and identify the purpose of the project.
- Vuetify cards have been implemented to enhance the visual appeal and consistency of the user interface.
- The layout is responsive and optimized for various screen sizes, ensuring a good experience on both desktop and mobile devices.
- Post details are sent as params inside the post details page, because there is no endpoint to get post details by ID.
- Loader is added when loading more posts and no more posts message when there are no posts.
- Utility has been created for formatting date and time in a good format using "moment" library.
- Friendly error user notification when failed to fetch. 


