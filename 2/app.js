const list = [
    {
        isCheckable: true,
        checked: false,
        name: '00-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '01-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '02-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '03-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '04-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '05-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '06-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '07-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '08-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '09-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '10-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '11-未派車',
    },
    {
        isCheckable: true,
        checked: false,
        name: '12-未派車',
    },
]

function App() {
    const [lastChecked, setLastChecked] = React.useState()

    function handleClick(e) {
        let isInBetween = false

        if (e.shiftKey && e.target.checked) {
            const checkboxs = document.querySelectorAll('[type=checkbox]')
            checkboxs.forEach((checkbox) => {
                if (checkbox === e.target || checkbox === lastChecked) {
                    isInBetween = !isInBetween
                }

                if (isInBetween) {
                    console.log('e.target is in between=>', e.target)
                    checkbox.checked = true
                }
            })
        }

        setLastChecked(e.target)
    }

    return (
        <div className="inbox">
            {list.map((item, i) => (
                <label key={i} className="item">
                    <input type="checkbox" onClick={handleClick} />
                    <p>{item.name}</p>
                </label>
            ))}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
