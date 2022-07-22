import FAQ from "./FAQ";

function FAQs(props) {
    return (
        props.faqs.map((section) => {
            return (
                <div key={section.id}>
                    <h2 style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        marginTop: 32,
                        marginBottom: 19,
                        color: '#bebebf'
                    }}>{section.title.toUpperCase()}</h2>
                    {
                        section.faqs.map((faq, i) => {
                            return <FAQ key={i} title={faq.title} content={faq.content}/>
                        })
                    }
                </div>
            )
        })
    );
}

export default FAQs;
