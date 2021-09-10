import { Cap } from '../Image';

export function Caps(){
    return(
        <div>
            <h1>Caps</h1>
            <div className="gallery-row py-3">
                {Cap.map((item, index) => {
                        return(
                        <div className="col-sm-2">
                            <ul id="autoWidth" className="cs-hidden">
                                <li className={item.Cname}>
                                    <div className="gallery-box">
                                        <div className="gallery-image" key={index}>
                                            <img src={item.url} alt={item.alt} />
                                        </div>
                                    </div>
                                </li>
                            </ul>   
                        </div>
                        )
                    })}
            </div>  
        </div>
    )
}