import './main.css'

export default function Main({ children }) {
    return (
        <main>
            <h1>Elementos filhos</h1>
            <hr />
            <div>{children}</div>
        </main>
    )
}