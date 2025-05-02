'use client'
import React from 'react'

const AddToCart = () => {
    return (
        <div className='p-5 my-5 bg-sky-400 text-white txt-xl hover:bg-sky-500'>
            {/* <button className='btn btn-primary' onClick={() => console.groupCollapsed('Click')}>
                Add to Cart
            </button> */}
            <div className="chat chat-start">
  <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-secondary">
    Put me on the Council and not make me a Master!??
  </div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-accent">
    That's never been done in the history of the Jedi.
  </div>
</div>
<div className="chat chat-start">
  <div className="chat-bubble chat-bubble-neutral">It's insulting!</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
</div>
<div className="chat chat-end">
  <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
</div>

        </div>
    )
}

export default AddToCart