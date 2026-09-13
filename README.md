# Assignment-5: Dev Stack Builder Website

### Title: Build Your Tech Stack 

#### Description: Select the technologies you know, don't select the ones you don't, and create your own personalized tech stack

## Technologies:
- [@reactjs](https://github.com/react/react) 
- [@TypeScript](https://www.typescriptlang.org/) 
- [@vite](https://vite.dev/) 
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
- [@Tailwind css](https://tailwindcss.com/)
- [@React Toaltify](https://github.com/fkhadra/react-toastify)
- [@React Icons](https://react-icons.github.io/react-icons/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).


## Key Features
+ Add technology.
+ Remove technology.
+ Easy to use.
+ Modern design.
+ Responsive Design

## JSON Data structure

```json
{
  "id": "vue",
  "name": "Vue.js",
  "category": "Frontend",
  "description": "A progressive JavaScript framework for building interactive and component-based user interfaces.",
  "icon": "https://icon.icepanel.io/Technology/svg/Vue.js.svg",
  "rating": 4.8,
  "difficulty": "Beginner-Friendly",
  "badge": "Popular"
}
```

## Question and answer section
#### Q1. What is JSX, and why is it used in React?

Ans: JSX is javascript xml. It's allow to write html tag into a js file. Which is not actual html tags. It's gives us a environment where we can write html like code to save time and easy to write. React developer invented jsx and now it is the most popular syntex.

#### Q2. What is the difference between props and state?

Ans: props is property of component which pass from parent to child component and state like a local storage which manage data of component, can change and re-render component. 

#### Q3. What does the useState hook do, and where did you use it in this project?

Ans: useState is a React Hook which import form react. useState used inside component and outside of return value. Its provide 2 parameter to store data and changed the stored data.

#### Q4. What does the useEffect hook do, and why did you need it to load the JSON data?

Ans: useEffect is a React Hook which used to perform side effects in React component specially in fetch data form api, loading data when components start etc. We need it becaouse data fatching a side effice in react component.

#### Q5. Why does every item in a .map() list need a unique key prop?

Ans: .map() function can create a new array from exsisting array element with modification so react need to track elements of array that can perform add, remove, filter, find etc. key is the qunique element that react can track which item it is and can increase performance and accuracy. 

#### Q6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Ans: Conditional rendering means react will render something based on condition. If condition true then render something or render somethin else or do not render anything. example: if user logged in then render dashboard page or redirect to the login page.

#### Q7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

And: Parent component send data to child component using props drilling. That's means parent drill a props to its child and child catch props inside into its self component. But child can't send data to parent component in react. React is unidirectional data flow system. So when child need to send back to parent some data in that case state need to declear to parent component and send it to the child. Child should receive the state valiable and setFunction. By the calling setFunction child can change the parent state data. That's the procedure. Child can't send data to parent component.

