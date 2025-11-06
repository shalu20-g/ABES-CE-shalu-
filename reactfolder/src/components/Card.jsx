import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div id='adi'>
        <h1>{props.name}</h1>
        <img src="https://imgs.search.brave.com/-6g3sLtrmQB1iJq1wOzxp1rc6bDi38YDDm31eu2gDQw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvNjIy/NjI1ODQ4L3N0b2Nr/LXBob3RvLXBpenph/LXRyYWRpdGlvbmFs/LWl0YWxpYW4tY3Vp/c2luZS1mYXN0LWZv/b2QtZ291cm1ldC1m/cmVzaC1kZWxpY2lv/dXMtaG9tZW1hZGU" alt="" height={100} width={100} />
        <h3>{props.rate}.</h3>

        <h1>{props.name}</h1>
        <img src="https://imgs.search.brave.com/35Lz9SJO-DxlY34Vlg9G18PL5XEbNGNmTS1wKRlOpRE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NjU0NTQ4YzRiZmEx/OWJjNWU0YzVhN2Mv/NjY3M2YzNzA4N2Rl/M2EyM2VjZjg0Njkz/X1Bob3RvX0J1cmdl/ci5hdmlm" alt="" height={100} width={100} />
        <h3>{props.rate}.</h3>

        <h1>{props.name}</h1>
        <img src="https://imgs.search.brave.com/rjIMW2g7MZnqofUeFsp3D0iHlRfeJIXzRrvv-z9rE9c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/OTM4MDI1MC9waG90/by9zb2RhLWRyaW5r/LXdpdGgtaWNlLWN1/YmVzLWFuZC1yZXVz/YWJsZS1kcmlua2lu/Zy1zdHJhd3MuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUdH/X2E1UFQtNkF1UTZJ/N1Vyc2ZLSVU2VzV5/dC04U3BvdGIxLWs5/V04zYlE9" alt="" height={100} width={100} />
        <h3>{props.rate}.</h3>
    </div>
  )
}

export default Card;