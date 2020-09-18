import React from 'react';
import Form from "../component/form";
import {Title} from "../component/Title";



class Home extends React.Component{

  state ={
    img:[],
    visible: 3,

  };
  loadMore = this.loadMore.bind(this);

  loadMore() {
    this.setState((prev) => {
      return {visible: prev.visible + 3};
    });
  }

  gettingInfo = async (e)=>{
    e.preventDefault();
    const rover = e.target.elements.rover.value;
    const camera = e.target.elements.camera.value;
    const sol = e.target.elements.sol.value;
    const api_url = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=DEMO_KEY`);
    const data = await api_url.json();
    console.log(data);

    if(sol){
      this.setState({

        img: data.photos
      })
    }

  };

  render() {

    return(

      <div className="container">
        <Title/>
        <Form infoMethod={this.gettingInfo}/>
        <div className="info-img">
          {this.state.img.slice(0, this.state.visible).map((item) => {
            return (
              <div className="img-card">
                <a data-fancybox="gallery" href={item.img_src} >< img key={item.id} src={item.img_src} alt="" className="size" /></a>
              </div>
            );
          })}
        </div>
        <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
      </div>
    )
  }

}
export default Home;
