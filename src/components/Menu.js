import MenuTile from "./MenuTile";
function Menu(props) {
    return (
        <div style={{position: 'sticky', top: 30, marginTop: 20}}>
        {
            props.faqs.map((section, i) => {
                return <MenuTile key={i} title={section.title} section={section.slug}/> //como ns q es section pq no existe en ningún lado, así queda (es magia)
            })
        }
        </div>
    );
}

export default Menu;
