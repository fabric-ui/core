import React, {useEffect, useRef, useState} from "react";

export default function useMaxHeight() {
    const ref = useRef()
    const [maxHeight, setMaxHeight] = useState()

    useEffect(() => {
        const bBox = ref.current.getBoundingClientRect()
        setMaxHeight((ref.current?.parentNode.offsetHeight - bBox.y) + 'px')
        console.log('THIS IS MAX HEIGHT ', (ref.current?.parentNode.offsetHeight - bBox.y), bBox.y)
    }, [])
    return {ref, maxHeight}
}