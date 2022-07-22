import Test from "./Test";
import Acordeon from "./Acordeon";

function FAQs() {
    const models = [
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <ul>
                        <li>Normas de realización.</li>
                        <li>Duración.</li>
                        <li>Puntuación detallada de cada parte.</li>
                        <li>Fechas de:</li>
                        <ul>
                            <li>Publicación de calificaciones.</li>
                            <li>Revisión del examen.</li>
                        </ul>
                    </ul>
                    <a href="https://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Alumnos/Informacion/Normativa/Normativa%20de%20Evaluacion_CG_26_5_22.pdf"
                       target="_blank" rel="noreferrer">Artículo 22.5, Normativa de Evaluación</a>
                </div>
        },
        {
            title: "Antes de empezar el examen, deben indicarnos...",
            content:
                <div>
                    <h1>HVIHEBFOHQEJBFOJEQF</h1>
                    <p>Pruiebfiuwe</p>
                </div>
        }
    ];

    return (
        models.map((item, i) => {
            return <Acordeon key={i} title={item.title} content={item.content}/>
        })
    );
}

export default FAQs;
