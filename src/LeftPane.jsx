function LeftPane({locations, selected, setSelected}) {
    return (
        locations.map((loc, index) => {
            const elemClass = index === selected ? 'selected_city' : ''
            return (
                <div key={index} className={elemClass}>
                    <span onClick={() => {setSelected(index)}} >{loc.name}</span>
                </div>
            )
        })
    )
}

export default LeftPane