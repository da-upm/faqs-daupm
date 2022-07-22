import daupm from "../assets/daupm.png";

function Header() {
    return (
        <div style={{width: "100%", backgroundColor: '#00509B', textAlign: 'center', paddingTop: 20, paddingBottom: 20}}>
            <img src={daupm} alt="logo" width={200} />
            <p style={{color: "white", fontSize: 40, marginTop: 20, marginBottom: 20}}>
                DA-UPM FAQs
            </p>
            <p style={{color: "white", fontSize: 20, marginBottom: 0}}>
                Preguntas y respuestas frecuentes para tu día a día en la UPM
            </p>
        </div>
    );
}

export default Header;
