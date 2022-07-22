function MenuTile(props) {
    return (
        <a href={"#" + props.section} style={{textDecoration: "none"}}>
            <div className="menutile">
                <text style={{color: "white"}}>{props.section}</text>
            </div>
        </a>

    )
}

export default MenuTile;