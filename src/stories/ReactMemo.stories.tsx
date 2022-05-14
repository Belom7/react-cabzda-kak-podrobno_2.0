import React, {useState} from "react";

export default {
    title: 'React Memo',
}

const NewMessageSecret = (props:{count:number}) => {
    console.log('component NewMessage rerender')
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users:string[]}) => {
    console.log('component Users rerender')
    return <div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)
const NewMessage = React.memo(NewMessageSecret)

export const Example1 = () => {
    const [count,setCount]=useState(0)
    const [users,setUsers]=useState(['Maks','Dima','Evgen'])
    return <>
        <button onClick={()=>setCount(count+1)}>+</button>
        <NewMessage count={count}/>
        <button onClick={()=>setUsers([...users, 'NewUsers'])}>addUsers</button>
        <Users users={users}/>
    </>
}