import React ,{Fragment} from "react";

class InfoBox extends React.Component {
    render(){
        return (
            <Fragment>
                <div className="p=3 mt-3 bg-dark text-white text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h5 className="display-4">Enjoy Your Holidays</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}
export default InfoBox;