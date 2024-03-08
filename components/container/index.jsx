import './container.css'

function Container({ children }) { /* props que indica elemento filho de componente */
    return (
        <section className='container'>
            {children}
        </section>
    )
}

export default Container;