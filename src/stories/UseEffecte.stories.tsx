import {useEffect, useState} from "react";

export default {
    title: 'UseEffect'
}

export const SimpleExample = () => {         /* 1 отработала функция*/
    console.log('SimpleExample')

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
export const SetIntervalOutExample = () => {
    console.log('SetTimeOutExample')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(1)
    const [tick, setTick] = useState(0)


    useEffect(() => {
        console.log('useEffect')

        const intervalId = setInterval(() => {
            console.log('setInterval 2')
            setTick((state) => state + 1) /*вызовет функцию setTick в которую передаст state(измененное инициализиационное значение) и прибавит 1*/
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    return (      /*3 - отрисовался jsx    5- произошла перерисовка jsx*/
        <div>
            <div>
                counter : {counter}
                <button onClick={() => setCounter(counter + 1)}>counter</button>
            </div>
            <div>
                fake : {fake}
                <button onClick={() => setFake(fake + 1)}>klick</button>
            </div>
            <div>
                tick : {tick}
            </div>
        </div>
    )
}
export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(0)
    console.log('Component render' + counter)


    useEffect(() => {
        console.log('Effect occurred' + counter)
        return () => {
            console.log('Reset Effect' + counter)
        }
    }, [counter])


    const increase = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            hello, counter : {counter}
            <button onClick={increase}>click me</button>
        </div>
    )
}
export const KeysTrackerExample = () => {

    const [text, setText] = useState('')
    console.log('Component render' + text)


    useEffect(() => {
            console.log('Effect occurred' + text)

            const handler = (e: KeyboardEvent) => {
                console.log(e.key)
                setText((state) => state + e.key)
            }

            window.addEventListener('keypress', handler)
            return () => {
                window.removeEventListener('keypress', handler)
            }
        }, []
    )


    return (
        <div>
            text : {text}
        </div>
    )
}
export const SetTimeOutExample = () => {

    const [text, setText] = useState('')
    console.log('Component render' + text)


    useEffect(() => {
            console.log('Effect occurred' + text)

            const timeOutId = setTimeout(() => {
                console.log('Expired!')
                setText('3 seconds piu-piu')
            }, 3000)

            return () => {
                clearTimeout(timeOutId)
            }
        }, [text]
    )


    return (
        <div>
            text : {text}
        </div>
    )
}