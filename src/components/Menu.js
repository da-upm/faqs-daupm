import MenuTile from "./MenuTile";

function Menu() {
    return (
        <div style={{position: 'sticky', top: 20}}>
            <MenuTile section="Evaluación"/>
            <MenuTile section="Matriculación"/>
            <MenuTile section="Área TIC"/>
            <MenuTile section="Inglés en la UPM"/>
            <MenuTile section="Bibliotecas"/>
        </div>
    );
}

export default Menu;
