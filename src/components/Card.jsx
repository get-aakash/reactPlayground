import { getImageUrl } from "./utils";

export default function Card({children}) {
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    {children}
                </div>
            </div>
           
          

        </div>
    )
}