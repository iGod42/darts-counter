import React from 'react'

const FourOhFour = ({history}) => (
  <div>
    404 Page not found.
    <button onClick={history.goBack}>Go back</button>
  </div>
)

export default FourOhFour
