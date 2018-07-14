import React from 'react';
export default class Form extends React.Component {

  state={name:'',category:'',photo:'',price:'',points:[],point:''};

  handlePoints=()=>
  {
    var ps = this.state.points;
    ps.push(this.state.point)
    this.setState({points:ps,point:''})
  }

  handleSubmit=()=>
  {
    //at least enter name and category
    if(this.state.name.replace(/\s/g,'').length > 0 && this.state.category.replace(/\s/g,'').length > 0)
    {
      var newObj = this.props.products;
      var product = {name:this.state.name, category:this.state.category, price: this.state.price, photo:this.state.photo,points:this.state.points};
      if(this.state.category in this.props.products)
      {
        newObj[this.state.category].push(product);
      }
      else
      {
        newObj[this.state.category] = [];
        newObj[this.state.category].push(product);
      }
      this.props.updateProducts(newObj);
      this.setState({name:'', category:'', photo:'', price:'', points:[], point:''});
    }
    this.props.setFormFlag(false);
  }

  onCancel=()=>{
    this.setState({name:'', category:'', photo:'', price:'', points:[], point:''});
    this.props.setFormFlag(false);
  }

  render() {
      return (
        <div class="form-group">
          <input placeholder="name" value={this.state.name}
          onChange={ v =>this.setState({name:v.target.value})} style={{width:500}} class="form-control" id="pwd"/>

          <input placeholder="category" value={this.state.category}
          onChange={ v =>this.setState({category:v.target.value})} style={{width:500}} class="form-control" id="pwd"/>

          <input placeholder="price" value={this.state.price}
          onChange={ v =>this.setState({price:v.target.value})} type="number" style={{width:500}} class="form-control" id="pwd"/>

          <input placeholder="photo" value={this.state.photo}
          onChange={ v =>this.setState({photo:v.target.value})} style={{width:500}} class="form-control" id="pwd"/>

          <div class="form-inline" >
            <input placeholder="enter a selling point" style={{width:500}}
            value={this.state.point} onChange={ v =>this.setState({point:v.target.value}) }
             class="form-control" id="pwd"/>
            <button onClick={this.handlePoints} class="btn btn-default">add</button>
          </div>
          <button onClick={this.handleSubmit} class="btn btn-default">Submit</button>
          <button onClick={this.onCancel} class="btn btn-default">cancel</button>
        </div>
        );
    }
}
