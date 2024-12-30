# Lab04
In this project, created error handlers 403 and 404 for navigation, by using __react router dom__.

There are 4 pages, 1 component for better using experience and 1 style module. 

- Main navigation is contained in [App.jsx](./src/App.jsx), where created I placed the createBrowserRouter function. This function contains main paths and error events. 
- In pages folder there are 2 pages of errors ([Forbidden.jsx](./src/pages/Forbidden.jsx) and [NotFound.jsx](./src/pages/NotFound.jsx)), 1 main page ([Home.jsx](./src/pages/Home.jsx)) and protected page ([Protected.jsx](./src/pages/Protected.jsx)). User can get access on main main page to test 403 error handler. 404 handler will automatically activate if path does not exist.
- Component [Authenticator.jsx](./src/components/Authenticator.jsx) created for testing error handlers. It is a wrapper for pages on createBrowserRouter level, which requires some allowance. Also this component contains useContext hook to send authentication status for pages.

*Also, a good idea will be to add main layout for all pages, to keep canonical structure of the application (already added). Hope you will leave feedback for better result*
