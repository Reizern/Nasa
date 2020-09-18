import React from "react";



class Form extends React.Component{
  render() {
    return(

      <form onSubmit={this.props.infoMethod}>
        <div className="flax">
          <div className="form-group">
          <select className="nan" id="exampleFormControlSelect1" name="rover">
            <option>curiosity</option>
            <option>opportunity</option>
            <option>spirit</option>
          </select>
        </div>
          <div className="form-group">
            <select className="nan" id="exampleFormControlSelect1" name="camera">
              <option>fhaz</option>
              <option>rhaz</option>
              <option>mast</option>
              <option>chemcam</option>
              <option>mahli</option>
              <option>mardi</option>
              <option>navcam</option>
              <option>pancam</option>
              <option>minites</option>
            </select>
          </div>
          <input type="number" name="sol" placeholder="Sol" className="num" required/>
          <button className="btn btn-primary button">Get a photo</button>
        </div>
      </form>
    )
  }

}
 export default Form;
