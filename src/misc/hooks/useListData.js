import React, {useMemo, useState} from "react"

export default function useListData(keys, initialData = [], selfContained=false) {

   const [currentSort, setCurrentSort] = useState([])
   const sortedData = useMemo(() => {
      let clone = [...initialData]
      for (let i = 0; i < currentSort.length; i++) {
         const s = currentSort[i]

         if (s && s?.sort !== undefined) {
            initialData.sort((a, b) => {
               let keyA, keyB
               switch (s.type) {
                  case 'date':
                     keyA = new Date(a[s.key])
                     keyB = new Date(b[s.key])
                     if (s.sort === 'asc') {
                        if (keyA < keyB) return -1;
                        if (keyA > keyB) return 1;
                     } else {
                        if (keyA < keyB) return 1;
                        if (keyA > keyB) return -1;
                     }
                     break
                  case 'number':
                  case 'string':
                     keyA = a[s.key]
                     keyB = b[s.key]

                     if (s.sort === 'asc') {
                        if (keyA < keyB) return -1;
                        if (keyA > keyB) return 1;
                     } else {
                        if (keyA < keyB) return 1;
                        if (keyA > keyB) return -1;
                     }
                     break
                  default:
                     break
               }
            })
         }
      }
      return clone
   }, [initialData, currentSort])
   return {
      data: sortedData,
      keys,
      currentSort,
      setCurrentSort,
      selfContained
   }
}
