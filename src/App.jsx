import logo from './logo.svg'
import './App.css'
import { Footer } from './components/Footer'

// your default export can be imported without the curly brackets
// if you're importing though something that has NOT been exported as default,
// you need to wrap it in curly brackets

// App is a React Component!
// A React Component is a function returning something very similar to HTML...
// this syntax very similar to HTML is called JSX
// JSX is like HTML but on steroids!!

// a React Component can be as simple as a function returning some JSX!

// how can we distinguish between regular js files and React Components files?
// 1) the function returning JSX usually has a Capital letter to start
// 2) the filename also has a capital letter
// 3) if you want, you can name React Components with a .jsx extension

const App = () => (
  // className means class. class is a reserved keyword in JS
  <div className='App'>
    <header className='App-header'>
      {console.log('ciao!')}
      <img src={logo} className='App-logo' alt='logo' />
      <h1>Hello Strivers!</h1>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
      <ul className='wrong-class'>
        <li>This</li>
        <li>is</li>
        <li>your</li>
        <li>first</li>
        <li>react</li>
        <li>example</li>
      </ul>
    </header>
    <Footer />
  </div>
)

export default App
