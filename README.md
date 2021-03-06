# AUSTPOSTSEARCH

This is a React web-based app featuring a form that should check validity of a given entered postcode, suburb and state.

### INSTALLATION

First clone the repository by running the following code in the browser:
### `git clone https://github.com/robertmtpaul/aus-post-search.git`

and then in the project directory you can run:

### `npm run start`

This will run the app in  development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### TESTING FUNCTIONALITY

You can try typing in a postcode and hitting Search Address, however due to lack of finished code, the form does not yet work.

### KNOWN ISSUES/BUGS

- Invalid hook call. It appears that the code in AustpostSearch has been written incorrectly breaking the rules of hooks, however it could not be determined what was causing the problem; 
- Code unable to successfully run API request. It appears that the headers are not being set correctly, or the request has not been written correctly;
- Testing has not been set up.

### PLANNED CHANGES/ADDITIONS

- Add state form input field and relevant functions to SearchForm.jsx
- Fix AustpostSearch.jsx so that hooks are used correctly or refactor as a class-based component;
- Fix API call using axios;
- Use react-form-hooks library for form validation and simplifying saving of entered data into state;
- Set up testing of form validation using enzyme;
- Style up form using CSS, Bootstrap and add icons with Fontawesome.
