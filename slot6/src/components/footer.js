import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
export const Footer =()=>{
    return(
       <div className="col-lg-12">
                        <div className="container">
                            <div className='row'>
                                <h2 className='text-center'>Book your table</h2>
                                <div class="row mb-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                    </div>
                                    <div className="col">
                                        <select id="inputState" class="form-select">
                                            <option selected>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className="col">
                                        <textarea class="form-control" rows="5" placeholder="Please write your comment" aria-label="Please write your comment"></textarea>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col">
                                        <input type='submit' className='btn btn-warning' value="Send me " ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}
