import React from 'react';
export default class Header extends React.Component {

  state={data:[],searchValue:''};

  componentDidMount()
  {
      var data = this.props.data;
      data.push('all');
      this.setState({data:data})
  }
  componentWillReceiveProps(nextProps) {
    var data = nextProps.data;
    data.push('all');
    this.setState({data:data});
   }


  handleButton=()=>{
    this.props.setSelected('search');
    this.props.setSearchValue(this.state.searchValue);
  }

  render() {
      return (
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand">Online Store</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown">Products
                <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  {this.state.data.map((d, idx)=>
                    <li onClick={()=>this.props.setSelected(d)}  key={idx}><a>{d}</a></li>)
                  }
                </ul>
              </li>
            </ul>
        	<div class="navbar-form navbar-left">
            <input id="search-text" type="text" class="form-control" placeholder="Search"
            onChange={ v =>this.setState({searchValue:v.target.value}) } />
        		<button onClick={this.handleButton} class="btn btn-default">Submit</button>
            <button onClick={()=>this.props.setFormFlag(true)} class="btn btn-default">add product</button>
        	</div>
          </div>
        </nav>
        );
    }
}
