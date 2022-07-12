export default function HomeFrame(props) {

    

    return (
        <div id="frameCon" style={{display: props.showDiv ? "block" : "none"}}>
            <div id="closeCon" onClick={props.handleClick()}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <iframe width="967" height="544" src="https://www.youtube.com/embed/lABRnbugKfM" title="Nova Fan Team Club Promotional Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}