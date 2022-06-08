import {useEffect, useState} from "react";

export default {
    title: 'UseEffect'
}

export const example = () => {         /* 1 отработала функция*/
    console.log('example')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(1)

    useEffect(() => {           /*2 - функция зафиксировала юз эффект но не запустила   4 - отработал юз эффект*/

        console.log('useEffect')
        document.title = counter.toString()
    }, [counter])    /*useEffect  вызовется только тогда когда измениться counter*/

    /*если в useEffect не передать зависимости то он будет вызываться при каждой перерисовке страницы*/
    /*если в useEffect передать пустой массив зависимости то он вызовется только 1 раз*/
    /*если в useEffect передать массив зависимости со значением то он будет вызываться только при изменении этого значения*/

    return (      /*3 - отрисовался jsx    5- произошла перерисовка jsx*/
        <div>
            <div>
                {counter}
                <button onClick={() => setCounter(counter + 1)}>counter</button>
            </div>
            <div>
                {fake}
                <button onClick={() => setFake(fake + 1)}>klick</button>
            </div>


        </div>
    )
}