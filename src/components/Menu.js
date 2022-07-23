import MenuTile from "./MenuTile";

function Menu(props) {
    return (
        <div style={{position: 'sticky', top: 30, marginTop: 20}}>
        {
            props.faqs.map((section, i) => {
                return <MenuTile key={i} title={section.title} section={section.slug}/>
            })
        }
        </div>
    );
}

export default Menu;
