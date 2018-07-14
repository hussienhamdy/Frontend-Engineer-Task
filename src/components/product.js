import React from 'react';

export default class Product extends React.Component {

  render() {
      return (
        <div className='col-xs-12 col-sm-6 col-md-4'>
					<article className='card-wrapper'>
						<div className='image-holder'>
							<div className='image-liquid image-holder--original' style={{backgroundImage: `url(${this.props.product.photo})`}}>
							</div>
						</div>
						<div className="product-description">
							<h1 className="product-description__title">
									{this.props.product.name}
							</h1>
							<div className="row">
								<div className="col-xs-12 col-sm-8 product-description__category secondary-text">
									{this.props.product.category}
								</div>
								<div className="col-xs-12 col-sm-4 product-description__price">
									 {'$'+this.props.product.price}
								</div>
							</div>
							<hr />
							<div className="sizes-wrapper">
								<b>selling points</b>
								<br />
								<span className="secondary-text text-uppercase">
									<ul className="list-inline">
                  {this.props.product.points.map((d, idx)=>
                    <li>{d}</li>)
                  }
									</ul>
								</span>
							</div>
						</div>
					</article>
				</div>
        );
    }
}
