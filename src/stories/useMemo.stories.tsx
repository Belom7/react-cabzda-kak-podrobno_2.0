import React, {useMemo, useState} from "react";

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

const UsersSecret = (props: {users:string[]}) => {
    console.log('component UsersSecret rerender')
    return <div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpToReactMemo = () => {
    console.log('HelpToReactMemo')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Maks', 'Dima', 'Evgen', 'emmmm'])

    const filteredUsers = useMemo(()=>users.filter(u=>u.toLowerCase().indexOf('m')> -1), [users])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => setUsers([...users, 'EM and EMMMS'])}>addUsers</button>
        <Users users={filteredUsers}/>
    </>
}