export default function HobbyLinks() {
    let hobbyLinks = ["https://www.formula1.com/", "https://www.wattpad.com/"];
    let pageTitle = "Hobbiz"
    return (    
        <div>
                <h3>{pageTitle}</h3>
                <a href = {hobbyLinks[0]}>Formula 1</a>,
                <a href = {hobbyLinks[1]}>Wattpad</a>

                </div>
            );
    
}