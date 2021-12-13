// props is an object containing all the "attributes" you're invoking your component with
// {
//     title: 'xxxxxxxx',
//     color: 'xxxxxxxx'
//     count: 'yy'
// }

const Content = (props) => (
    <>
        {/* this is called a React Fragment */}
        {/* like a virtual wrapper for exporting multiple elements out of a single component */}
        <p>Hello</p>
        <h2 style={{ color: props.color }}>{props.title || 'Default Title'}</h2>
        <p>The value of count is: {props.count}</p>
    </>
)

// this is with ES6 object destructuring! not for the faint of heart :)
// const Content = ({ title, color }) => (
//     <>
//         {/* this is called a React Fragment */}
//         {/* like a virtual wrapper for exporting multiple elements out of a single component */}
//         <p>Hello</p>
//         <h2 style={{ color: color }}>{title || 'Default Title'}</h2>
//     </>
// )

export default Content

// now I'm trying to make the Content component a little more dynamic
// because 90% of this component is always going to be the same
// you can make DYNAMIC as little or as much of a component
// using the PROPS
// what are props? they are to react components like attributes are to html tags

// props is the argument of your functional component
// it's ALWAYS going to be an object
// it will contain every key/value from the props you're invoking the component with