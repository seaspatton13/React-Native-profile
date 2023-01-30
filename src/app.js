function App() {
    const [navToggle, setNavToggle] = useState(false);
    const navClick = () => {
        setNavToggle(!navToggle)
    }

    return (
        <div className="App ">
            <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>

            </div>
        </div>
    )
}