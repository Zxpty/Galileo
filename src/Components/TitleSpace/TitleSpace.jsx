import './TitleSpace.css'
export default function TitleSpace({firstTitle, secondTitle,children}) {
    return (
        <section id="space">
            <div className="space">
                <div>{firstTitle}</div>
                <div>{secondTitle}</div>
            </div>
            <div>
                {children}
            </div>
        </section>
    )
}