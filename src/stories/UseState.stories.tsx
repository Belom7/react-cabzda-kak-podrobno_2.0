import {useMemo, useState} from "react";

export default {
    title: 'useState'
}

function generateData() {               /* какие то сложные вычисления из за которых все подвисает*/
    console.log('generate data')
    return 333
}

// export const example = () => {
//     console.log('example')
//     // useState каждый раз будет брать инициализационное значение
//
//     // такие подходы лучше использовать когда идет какое то долгое вычисление
//
//     // const initialValue = generateData() /* при таком подходе каждый раз при клике на кнопку будет вызываться функция generateData и приложение будет подвисать*/
//     // const initialValue = useMemo(generateData,[]) /*для того чтоб функция не пере вызывалась обворачиваем ее в useMemo и делаем его с пустым массивом зависимостей(вызовет 1 раз)*/
//     // const [counter, setCounter] = useState(initialValue)
//
//     const [counter, setCounter] = useState(generateData) /*можно передать сразу функцию и она вызовется 1 раз*/
//
//     const changer = (state:number) => {       /*функция изменитель принимает параметр (состояние) которое сохранил в себе реакт и на его основе выдает нам новые данные */
//         return state + 1
//     }
//
//     return (
//         <div>
//             {counter}
//             {/*<button onClick={() => setCounter(counter + 1)}>klick</button>       /!*первый вариант*!/*/}
//             <button onClick={() => setCounter(changer)}>klick</button>       {/*второй вариант можем передать функцию*/}
//         </div>
//     )
// }