const list = [
    {
        isCheckable: true,
        name: '00-未派車',
    },
    {
        isCheckable: false,
        name: '01-未派車',
    },
    {
        isCheckable: true,
        name: '02-未派車',
    },
    {
        isCheckable: true,
        name: '03-未派車',
    },
    {
        isCheckable: true,
        name: '04-未派車',
    },
    {
        isCheckable: true,
        name: '05-未派車',
    },
    {
        isCheckable: true,
        name: '06-未派車',
    },
    {
        isCheckable: true,
        name: '07-未派車',
    },
    {
        isCheckable: true,
        name: '08-未派車',
    },
    {
        isCheckable: true,
        name: '09-未派車',
    },
    {
        isCheckable: true,
        name: '10-未派車',
    },
    {
        isCheckable: false,
        name: '11-未派車',
    },
    {
        isCheckable: true,
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

                if (isInBetween && !checkbox.disabled) {
                    checkbox.checked = true
                }
            })
        }

        setLastChecked(e.target)
    }

    return (
        <div className="inbox">
            {list.map((item, i) => (
                <div key={i} className="item">
                    <input
                        type="checkbox"
                        onClick={handleClick}
                        disabled={!item.isCheckable}
                    />
                    <p>{item.name}</p>
                </div>
            ))}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
