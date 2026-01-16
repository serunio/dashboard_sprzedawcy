import style from './Header.module.css'

function Header() {
    const toggleTheme = () => {
        const root = document.documentElement;
        const current = root.getAttribute("data-theme");

        root.setAttribute(
            "data-theme",
            current === "dark" ? "light" : "dark"
        );
    };
    return <div className={style.header}>
        <button onClick={toggleTheme}>motyw</button>
    </div>
}

export default Header