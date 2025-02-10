import { useState } from "preact/hooks";

function Coupen()
{
    const[disPrice, setDisPrice] = useState(10000);

    return(
        <>
            <h1>Total price with discount :${disPrice}</h1>
            <button onClick={() => setDisPrice=(disPrice*10)/100}>Ratan10</button>
        </>
    )
}
export default Coupen;