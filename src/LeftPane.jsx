function LeftPane({locations, selected, setSelected}) {
    return (
        locations.map((loc, index) => {
            const marker = index === selected ? '=>' : ''
            return (
                <div key={index}>
                    <span onClick={() => {setSelected(index)}} >{marker} {loc.name}</span>
                </div>
            )
        })
    )
}

export default LeftPane