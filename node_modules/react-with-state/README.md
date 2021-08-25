# react-with-state

Higher-order component abstraction for adding state management to a dumb component.

provides these props:
- state
- setState

[try it on codepen](http://codepen.io/amonks/pen/LxrXmG?editors=0010)

```javascript
import React from 'react'
import {render} from 'react-dom'

import withState from '../../src'

const Counter = ({state, setState}) =>
  <div>
    {state.count}
    <button onClick={() => setState({count: state.count + 1})}>
      Increment
    </button>
  </div>

const manageCounterState = withState({count: 0})
const ManagedCounter = manageCounterState(Counter)

render(<ManagedCounter />, document.querySelector('#demo'))
```

