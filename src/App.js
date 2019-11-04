import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import AddBuilding from './components/AddBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: -1,
      data: props.data
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    const currentBuilding = this.state.selectedBuilding.concat([id])
    this.setState({
      selectedBuilding: currentBuilding
    })
  }

  removeBuilding() {
    if (this.state.selectedBuilding >= 0 && this.state.selectedBuilding < this.state.data.length)
    {
      this.setState({
        data: arrayRemove(this.state.data, this.state.selectedBuilding),
        selectedBuilding: -1
      });
    }
  }

  addBuilding(val) {
    val.id = ++this.maxId;
    this.state.data.push(val);
    this.setState({ data: this.state.data });
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
        filterText={this.state.filterText}
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                  {
                (this.state.selectedBuilding >= 0 && this.state.selectedBuilding < this.state.data.length)  ?
                  <RemoveBuilding
                    removeBuilding={this.removeBuilding.bind(this)}
                  /> 
                  : null
              }
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
              selectedBuilding = {this.state.selectedBuilding}
              date={this.props.data}
              />
              <div className ="column3">
                <p>Add a Building</p>
              </div>
              <AddBuilding
                addBuilding={this.addBuilding.bind(this)}
                />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
