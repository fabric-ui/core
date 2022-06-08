## *useInfiniteScroll* - hooks

The _useInfiniteScroll_ hook gives you the fast way to set up an infinite scroll list.

### Usage

```jsx
import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, Alerts} from '@f-ui/core';

function App() {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const lastElementReference = useInfiniteScroll(setCurrentPage, currentPage, loading, hasMore)
  const [sampleData, setSampleData] = useState([1, 2, 3, 4, 5, 6, 7])

  useEffect(() => {
    fetch(/*Fetch your next dataset and add it to the data array*/)
  }, [currentPage])

  return (
    <ThemeProvider>
      {sampleData.map((data, index) => {
        if (index === sampleData.length - 1)
          return (
            <React.Fragment key={index + '-data-row'}>
              <div ref={lastElementReference}>
                Last element {data}
              </div>
            </React.Fragment>
          )
        else
          return (
            <React.Fragment key={index + '-data-row'}>
              <div>
                {data}
              </div>
            </React.Fragment>
          )
      })}
    </ThemeProvider>
  );
}

ReactDOM.render(<App/>, document.querySelector('#app'));
```

### Params

1. ***setCurrentPage***: Set the new current page `function`.
2. ***currentPage***: `number`.
3. ***loading***: If loading is true the hook will not trigger the page change even if the user has scrolled to the trigger point `boolean`.
4. ***hasMore***: If hasMore is false the hook will not trigger the page change even if the user has scrolled to the trigger point `boolean`.

