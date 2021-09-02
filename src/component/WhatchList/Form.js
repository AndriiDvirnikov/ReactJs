import React from 'react'

export default function Form({ todo, change, submit, err }) {
    return (
        <form onSubmit ={submit}>
            <div>
            <input className="inp-class" placeholder="Name to save" type="text" value={todo} onChange={change} />
            {err && <span className="inp-error">{err}</span>}
            </div>
            <button className="btn-submit" type="submit">Add to wathch</button>
        </form>
    )
}