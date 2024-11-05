import React, { useRef } from "react";

const FocusInput = () =>{
    const inputRef = useRef(null);

    const focusInput = () =>{
        inputRef.current.focus()
    }
    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}> focus input </button>
        </>
    )
}
export default FocusInput