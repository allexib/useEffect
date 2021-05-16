import React from "react";

class List extends React.Component {
    state = {
        numbers: [1, 2, 3]
    };

    addRandonNumber = () => {
        const randNumber = Math.round(Math.random() * 10);
        this.setState({
            numbers: [...this.state.numbers, randNumber]
        });
    }

    render() {
        return (
            <div>
                <ul>
                    
                    {this.state.numbers.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))}
                </ul>
                <button onClick={this.addRandonNumber}>Новое число</button>
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