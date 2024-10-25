import React, { useState } from 'react'
import qustion from '../qustion'
import Button from '../../challange/components/utils/button'

function Body() {
    const [userAnswar, setUserAnswar] = useState([])
    const activeQuestion = userAnswar.length
    const quizeCompleted = activeQuestion === qustion.length
    function selectAnser(answar: string) {
        setUserAnswar((prev) => {
            return [...prev, answar]
        })
    }


    if (quizeCompleted) {
        return <div className='flex items-center justify-center'>
            <span className='bg-zinc-500 text-white p-2 my-5 rounded-lg'>
                quizeCompleted
            </span>
           
        </div>
    }

    const shuffledAnswar = [...qustion[activeQuestion].answers]
    shuffledAnswar.sort(() => Math.random() - 0.5)

    return (
        <div>
            <h2>
                {qustion[activeQuestion].text}
            </h2>
            <ul className='flex flex-col gap-3'>
                {shuffledAnswar.map(answar => (
                    <Button style='' onClick={() => selectAnser()} key={answar.length + 1}>
                        {answar}
                    </Button>
                ))}
            </ul>
        </div>
    )
}

export default Body