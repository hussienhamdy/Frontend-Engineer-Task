import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Product from './components/product.js';
import Form from './components/form.js';

class App extends Component {

state={products :{
books:[{name:'harry potter',category:'books', photo:'https://images-na.ssl-images-amazon.com/images/I/71EwgGuAS9L._SY606_.jpg',price:100,points:['point1','point2','point3']},
{name:'the maze runner',category:'books',photo:'https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Maze_Runner_cover.png/220px-The_Maze_Runner_cover.png',price:200,points:['point1','point2','point3','point4']}]
,
albums:[{name:'head full of dreams',category:'albums',photo:'https://www.mygeekconfessions.com/wp-content/uploads/2015/12/coldplay-a-head-full-of-dreams-album-cover-e1451234388104-300x300.jpg',price:100,points:['point1','point2','point3']},
{name:'ghost stories',category:'albums',photo:'https://images-na.ssl-images-amazon.com/images/I/51Qd4W%2BjBsL.jpg',price:200,points:['point1','point2','point3']}]
}, selected:'', searchValue:'',formFlag:false};

  setSelected=(value)=>
  {
      this.setState({selected:value});
  }

  setSearchValue=(value)=>{
      this.setState({searchValue:value});
  }

  updateProducts=(obj)=>{
    this.setState({products:obj});
  }

  setFormFlag=(value)=>{
    this.setState({formFlag:value});
  }

  renderProducts=()=>
  {
    var data =[];
    //when page load
    if(this.state.selected=='')
    {
      return null;
    }
    else if(this.state.selected=='all')
    {
      var keys = Object.keys(this.state.products);
      var data = []
      for(var i = 0 ; i < keys.length ; i ++ )
      {
        var temp = this.state.products[keys[i]];
        for (var j = 0 ; j < temp.length ; j ++)
        {
          data.push(temp[j]);
        }
      }
    }
    // user pressed search button
    else if (this.state.selected=='search')
    {
      //if search value is only spaces do nothing
      if(this.state.searchValue.replace(/\s/g,'').length == 0 )
      {
        return;
      }
        var keys = Object.keys(this.state.products);
        var data = []
        for(var i = 0 ; i < keys.length ; i ++ )
        {
          var temp = this.state.products[keys[i]];
          for (var j = 0 ; j < temp.length ; j ++)
          {
            if(temp[j].name.includes(this.state.searchValue)||temp[j].category.includes(this.state.searchValue))
            {
              data.push(temp[j]);
            }
          }
        }
    }
    //user choose item from dropdown menu
    else
    {
      data = this.state.products[this.state.selected];
    }
    return data.map((d, idx)=>
    <Product key={idx} product={d}/>)
  }

  renderForm=()=>{
    if(this.state.formFlag==true)
    {
      return(
          <Form setFormFlag={this.setFormFlag} updateProducts={this.updateProducts} products={this.state.products} />
      );
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div>
        <Header setSearchValue={this.setSearchValue} setSelected={this.setSelected}
        searchProducts={this.searchProducts}
        setFormFlag={this.setFormFlag}
        data={Object.keys(this.state.products)}/>
        <div class="container">
          {this.renderForm()}
	         <div id='content' class="row">
		         {this.renderProducts()}
	         </div>
        </div>
      </div>
    );
  }
}

export default App;
