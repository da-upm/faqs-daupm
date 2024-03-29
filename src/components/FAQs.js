import FAQ from "./FAQ";
import sha256 from 'crypto-js/sha256';

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
                <div key={section.id} style={{marginTop: 20, marginBottom: 40}}>
                    <h2 style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        marginBottom: 20,
                        color: '#bebebf'
                    }} id={section.slug}>{section.title.toUpperCase()}</h2>
                    {
                        filterFaqs(section, props.searchText).map((faq, i) => {
                            return <FAQ key={sha256(faq.title)} title={faq.title} content={faq.content}/>
                        })
                    }
                </div>
            )
        })
    );
}

export default FAQs;
