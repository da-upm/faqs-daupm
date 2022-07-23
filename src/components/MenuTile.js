function MenuTile(props) {
    return (
        <a href={"#" + props.section} style={{textDecoration: "none"}}>
            <div className="menutile">
                <p style={{color: "white"}}>{props.title}</p>
            </div>
        </a>

    )
}

export default MenuTile;