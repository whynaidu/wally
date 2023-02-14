import React, { Component } from 'react'
import ModalImage from "react-modal-image";
import LazyLoad from "react-lazy-load";



export default class DesktopImage extends Component {
  render() {
    return (
      <div>
        <LazyLoad
          height={250}
          threshold={0.50}
          offset={100}
        >
          <ModalImage
            className="h-64 w-full rounded-lg  object-cover duration-100 ease-in hover:scale-103 hover:shadow-3xl"
            small={`../uploads/${this.props.url}`}
            large={`../uploads/${this.props.url}`}
            hideZoom={true}
          />
        </LazyLoad>
      </div>
    );
  }
}
