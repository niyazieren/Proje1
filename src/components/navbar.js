import React from 'react';

class Navbar extends React.Component{


	render(){
		return (
			<nav>
				<div class="ui grid">
					<div class="four wide column ui visible left sidebar">
			              <div class="ui list">
			                <a class="item">
			                  <i class="inbox icon"></i>
			                  Inbox
			                </a>
			              </div>
			              <div class="ui list">
			                <a class="item">
			                  <i class="star outline icon"></i>
			                  Today
			                </a>
			              </div>
			              <div class="ui list">
			                <a class="item">
			                  <i class="calendar alternate outline icon"></i>
			                  Upcoming
			                </a>
			              </div>
			              <div class="ui list">
			                <a class="item">
			                  <i class="check icon"></i>
			                  Complated
			                </a>
			              </div>
			              <div class="ui list">
			                <a class="item">
			                  <i class="trash alternate outline icon"></i>
			                  Trash
			                </a>
			              </div>
			              <h5 class="ui center aligned inverted grey header">
			                PROJECT
			              </h5>
			              <div class="ui list">
			                <a class="item">
			                  <i class="bars icon"></i>
			                  EverDo
			                </a>
			              </div>
			              <div class="ui list">
			                <a class="item">
			                  <i class="bars icon"></i>
			                  Gemshark
			                </a>
			              </div>
			              <div class="ui list">
			                <a class="item">
			                  <i class="bars icon"></i>
			                  Rubicon
			                </a>
			              </div>
			              <h5 class="ui center aligned inverted grey header">
			                PERSONAL
			              </h5>
			              <div class="ui list">
			                <a class="item">
			                  <i class="bars icon"></i>
			                  Shopping
			                </a>
			              </div>
			              <div class="ui list">
			                <a class="item">
			                  <i class="bars icon"></i>
			                  Health
			                </a>
			              </div>
			              <div class="ui list">
			                <a class="item">
			                  <i class="bars icon"></i>
			                  Entertainment
			                </a>
			              </div>
			              <h5 class="ui center aligned inverted grey header">
			                LEARNING
			              </h5>
			              <div class="ui center aligned list">
			                <a class="item">
			                  <i class="bars icon"></i>
			                  Electron
			                </a>
			              </div>
			              <div class="ui list">
			                <a class="item">
			                  <i class="bars icon"></i>
			                  Flexbox
			                </a>
			              </div>
			              <button class="center aligned ui big blue circular icon button">
								<i class="plus icon"></i>
							</button>

		            </div>
					<div class="twelve wide column">
						<h1 class="ui dividing header">
							Design
						</h1>

						<div class="ui menu">
							<a class="active teal item">
							    <div class="ui teal label">	10
							    </div>
							    Todos
							</a>
							<a class="item">
							  	<div class="ui blue label"> 3
							    </div>
							    Notes
							    
							</a>
							<a class="item">
							    <div class="ui label">
							    </div>
							    Links
							</a>
							<a class="item">
							    <div class="ui label">
							    </div>
							    Files
							</a>
						</div>
						<div class="grouped fields">
							<div class="field">
								<div class="ui checkbox">
									<input type="checkbox" name="example" ></input>
									<label>Project page</label>
								</div>
							</div>
							<div class="field">
									<div class="ui checkbox">
								  	<input type="checkbox" name="example"></input>
								  	<label>Today page</label>
								</div>
							</div>
						</div>
						<button class="ui right floated mini basic icon button" style={{marginTop:'45px'}}>
								<i class="ellipsis horizontal icon"></i>
							</button>
						<h3 class='ui dividing header' style={{marginTop:'45px'}}>
							Product planning
						</h3>

						<div class="grouped fields">
								<div class="field">
									<div class="ui checkbox">
									  	<input type="checkbox" name="example"></input>
									  	<label>Decide how to organize Today page</label>
									</div>
								</div>
							<div class="field">
								<div class="ui checkbox">
								  	<input type="checkbox" name="example"></input>
								  	<label>Create wireframes for the Today page</label>
								</div>
							</div>
							<div class="field">
								<div class="ui checkbox">
								  	<input type="checkbox" name="example"></input>
								  	<label>Decide whether to group items by type</label>
								</div>
							</div>
						</div>
						<button class="ui right floated mini basic icon button" style={{marginTop:'45px'}}>
								<i class="ellipsis horizontal icon"></i>
							</button>
						<h3 class='ui dividing header' style={{marginTop:'45px'}}>
							Design
						</h3>
						<div class="grouped fields">
							<div class="field">	
								<div class="ui checkbox">
								  	<input type="checkbox" name="example"></input>
								  	<label>Project page</label>
								</div>
							</div>
							<div class="field">
								<div class="ui checkbox">
								  	<input type="checkbox" name="example"></input>
								  	<label>Today page</label>
								</div>
							</div>
							<div class="field">
								<div class="ui checkbox">
								  	<input type="checkbox" name="example"></input>
								  	<label>End of day page</label>
								</div>
							</div>
							<div class="field">
								<div class="ui checkbox">
								  	<input type="checkbox" name="example"></input>
								  	<label>Notifications & Confirmations</label>
								</div>
							</div>
							<div class="field">
								<div class="ui checkbox">
								  	<input type="checkbox" name="example"></input>
								  	<label>Modals</label>
								</div>
							</div>
						</div>

						<button class="ui secondary basic button">
						  <i class="icon plus"></i>
						  Add item
						</button>
						<div className="ui container" style={{marginTop:'60px'}}>	
							<button class="ui circular green icon button">
							  <i class="check icon"></i>
							</button>
							<button class="ui circular red icon button">
							  <i class="x icon"></i>
							</button>
							<button class="ui circular orange icon button">
							  <i class="angle right icon"></i>
							</button>
							<button class="ui circular pink icon button">
							  <i class="calendar outline icon"></i>
							</button>
							<button class="ui circular teal icon button">
							  <i class="tag icon"></i>
							</button>
							<button class="ui circular blue icon button">
							  <i class="search icon"></i>
							</button>
							<button class="ui circular orange icon button">
							  <i class="download icon"></i>
							</button>
							<button class="ui right floated blue circular icon button">
								<i class="plus icon"></i>
							</button>
						</div>
					</div>
		        </div>
			</nav>
		)
	}
}

export default Navbar;