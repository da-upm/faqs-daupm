import FAQ from "./FAQ";

function FAQs(props) {
    const extractReadableContent = (html) => {
        const span = document.createElement('span');
        span.innerHTML = html;
        return span.textContent || span.innerText;
    };

    const filterFaqs = (section, text) => {
        return section.faqs.filter((faq) => {
            return faq.title.toLowerCase().includes(text.toLowerCase()) || extractReadableContent(faq.content).toLowerCase().includes(text.toLowerCase());
        })
    };

    let filteredFaqs = !(props.searchText === "") ?
        props.faqs.filter((section) => filterFaqs(section, props.searchText).length > 0)
        :
        props.faqs;

    return (
        filteredFaqs.map((section) => {
            return (
                <div key={section.id}>
                    <h2 style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        marginTop: 32,
                        marginBottom: 19,
                        color: '#bebebf'
                    }} id={section.title}>{section.title.toUpperCase()}</h2>
                    {
                        filterFaqs(section, props.searchText).map((faq, i) => {
                            return <FAQ key={i} title={faq.title} content={faq.content}/>
                        })
                    }
                </div>
            )
        })
    );
}

export default FAQs;
