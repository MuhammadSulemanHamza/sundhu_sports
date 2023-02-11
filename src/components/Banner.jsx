import { Envelope, Telephone } from "react-bootstrap-icons";

const Banner = () => {
    return (
        <div className="container-fluid bg-primary">
            <div className="container-fluid d-flex flex-md-row flex-column p-1 justify-content-between 
      align-items-center  text-white" style={{ maxWidth: 1440 }}>
                <div className="d-flex text-center">
                    <p className="fs-6 mb-md-3 mb-1"><small>Free delivery nationwide for orders above PKR 2500</small></p>
                </div>
                <div className="d-flex flex-md-row flex-column p-sm-0">
                    <p className="fs-6 mx-3 mb-md-3 mb-1"><Telephone /> <small className="mx-1">+92300-2134122</small></p>
                    <p className="fs-6 mb-md-3 mb-1"><Envelope /> <small className="mx-1">sundhusports@gmail.com</small></p>
                </div>
            </div>
        </div>
    )
}

export default Banner