# Lab №3

### In this lab I recreated form for flight registration using _react-hook-form_, _Select_, _DatePicker_ and yup.
### *15.11 -* Making the main functionality of the project. Later, some strangers will visit this wonderful repository and will make some changes to make this PROJECT better. 
### *23.11 -* Some corrections from main developer, as he missed station that form must include filters :(.
### *13.12 -* Hey, I`m the same man who must review this ugly form (sorry to be so blunt).
- №1 practice - reusable elements. Elements like [CustomDatePicker](./src/FlightSearchForm/reusableItems/CustomDatePicker.jsx) and [CustomSelect](./src/FlightSearchForm/reusableItems/CustomeSelect.jsx) can simplify main code and it`s components.
- №2 practice - decomposing. Elements like [CustomDatePicker](src/FlightSearchForm/components/TravelDetails.jsx) are elements that can be reused and have it`s own logic. Also, it simplifies main form. 

### *14.12 -* So, I decomposed the main form and will merging new branch with 2-3 new practices and bug fixes. Merged review branch with main
- №3 practice - modules. [Css modules](./src/FlightSearchForm/styles/styles.module.css) are useful functionality to separate styles and components. Even if my module only one and it has small amount styles, that`s great opportunity for future style upgrades.
- №4 practice - own hooks. I created hook [useFilteredCityOptions.jsx](./src/FlightSearchForm/hooks/useFilteredCityOptions.jsx) for separating business logic and component. It is great practice to support the code.
- №5 practice - memoization. Useful thing that provide more resource economy for this form. useMemo helped for [custom hook](./src/FlightSearchForm/hooks/useFilteredCityOptions.jsx) to control rerender of unchanged items.

### *14.12 -* Added style modules for gather styles in one file, created custom hook for separating logic, memoization to save pc resources
- №6 practice - localStorage. I added to the main form [localStorage](./src/FlightSearchForm/Form.jsx) for saving data in form fields, they become cleared after successful form submit.
- №7 practice - [react.lazy](./src/FlightSearchForm/components/TravelDetails.jsx). Useful for delayed download (when component is necessary). Also, will be useful when component will grow and getting new logic.
- Practices worth mentioning: 
  - Seperated [datasets](./src/FlightSearchForm/datasets/datasets.js) to avoid logic overflow, in upgraded version it can be replaced by data from database. 
  - Notebooking. Good practice for all types of programming as it`s helps to understand code and changes within.
  - Separating files by folders. Reduces confusion between the relationship of files to other files.
  - Using branches. Good choice to avoid fatal errors in the main code and develop new features safely

### Recommendations for the project:
- Add state management to control successfully submitted form data or other components.
- Add internationalization and localizations to satisfy different audiences.
- Simplify PassengerAndBaggage component.

### *14.12 -* Well, my job is done, a lot of elements are recomposed and upgraded by new logic. Form became more understandable and separated. For more information write me, don't be shy :)
**all branches are merged with main*