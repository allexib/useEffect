import React from "react";

class List extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    test
                    {/*{numbers.map((num, index) => (*/}
                        {/*<li key={index}>{num}</li>*/}
                    {/*))}*/}
                </ul>
                <button onClick={null}>Новое число</button>
            </div>
        );
    }
}

// const List = () => {
//     const [numbers, setNumbers] = React.useState([1, 555, 3]);
//
//     const addNumber = () => {
//         const randNumber = Math.round(Math.random() * 10);
//         const newArr = [...numbers, randNumber];
//         setNumbers(newArr);
//     };
//
//     return (
//         <div>
//             <ul>
//                 {numbers.map((num, index) => (
//                     <li key={index}>{num}</li>
//                 ))}
//             </ul>
//             <button onClick={addNumber}>Новое число</button>
//         </div>
//     );
// }
export default List;