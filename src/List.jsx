import React from "react";

// class List extends React.Component {
//     state = {
//         numbers: [1, 2, 3]
//     };
//
//     addRandonNumber = () => {
//         const randNumber = Math.round(Math.random() * 10);
//         this.setState({
//             numbers: [...this.state.numbers, randNumber]
//         });
//     };
//
//     componentDidMount() {
//         console.log('компонент был отображен');
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         //console.log({prevProps, prevState, nextProps: this.props, nextState: this.state});
//         if (this.state.numbers.length !== prevState.numbers.length) {
//             console.log('список чисел обновился');
//         }
//     }
//
//     componentWillUnmount() {
//         console.log('компонент будет удален');
//     }
//
//     render() {
//         return (
//             <div>
//                 <ul>
//
//                     {this.state.numbers.map((num, index) => (
//                         <li key={index}>{num}</li>
//                     ))}
//                 </ul>
//                 <button onClick={this.addRandonNumber}>Новое число</button>
//             </div>
//         );
//     }
// }

const List = () => {
    const [numbers, setNumbers] = React.useState([1, 555, 3]);
    const [count, setCount] = React.useState(0);

    const addNumber = () => {
        const randNumber = Math.round(Math.random() * 10);
        const newArr = [...numbers, randNumber];
        setNumbers(newArr);
    };


    React.useEffect(() => {
        console.log('did mount');
        return () => {
            console.log('will unmount');
        };
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Новое число</button>
        </div>
    );
}
export default List;