import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    let resultA = 1
    let resultB = 1

    useMemo(() => {
        for (let i = 1; i <= a; i++) {
            console.log('A')
            let fake = 0
            while (fake < 10000000) {
                fake++
                const a = Math.random()
            }
            resultA *= i
        }
    }, [a])

    useMemo(() => {
        for (let i = 1; i <= b; i++) {
            console.log('B')
            resultB *= i
        }
    }, [b])

    return <div>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            result a : {resultA}
        </div>
        <div>
            result b : {resultB}
        </div>
    </div>

}

const UsersSecret = (props: { users: string[] }) => {
    console.log('component UsersSecret rerender')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Maks', 'Dima', 'Evgen', 'emmmm'])

    const filteredUsers = useMemo(() => users.filter(u => u.toLowerCase().indexOf('m') > -1), [users])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => setUsers([...users, 'EM and EMMMS'])}>addUsers</button>
        <Users users={filteredUsers}/>
    </>
}


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [count, setCount] = useState(0)
    const [book, setBook] = useState(['React', 'JS', 'CSS', 'HTML'])

    const filteredUsers = useMemo(() => book.filter(u => u.toLowerCase().indexOf('m') > -1), [book])

    //const addBooks = () => setBook([...book, 'Angular'])  отдельно создали функцию
    //const memoizedAddBook = useMemo(()=>addBooks, [book]) отдельно ее замемоизировали

    // const memoizedAddBook = useMemo(()=>{
    //     return () => {
    //         setBook([...book, 'Angular'])
    //     }
    // }, [book]) так это выглядит мемоизация в одну строку без дробления на два

    const memoizedAddBook = useCallback(()=>setBook([...book, 'Angular']),[book])
// useCallback убирает лишнюю строчку return сокращая код


    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}

        <Book book={filteredUsers} addBooks={memoizedAddBook}/>
    </>
}
const BookSecret = (props: { book: string[], addBooks:()=>void }) => {
    console.log('component BookSecret rerender')
    return <div>
        <button onClick={props.addBooks}>addBooks</button>
        {props.book.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}
const Book = React.memo(BookSecret)