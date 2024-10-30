import React, { useState } from 'react'

function QuastionTimer({timout,onTimeout}) {

  const [remainTime, setRemainTime] = useState(timout)
  setTimeout(onTimeout,timout)

  return (
    <div>QuastionTimer</div>
  )
}

export default QuastionTimer