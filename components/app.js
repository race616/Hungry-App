import React from 'react';
import Child from './child';
import img from '../img/a.jpg';
import img1 from '../img/lb.jpg';
import img2 from '../img/chiken.jpg';
export default class App extends React.Component{
	constructor(props){
		super(props)
	}
	tap(){
		console.log('hello')
	}
	
	render(){
		return(
			<div>
				
				<img style={{width:"100%"}} src={img} alt="" />
				<div className="img1">	
					<img style={{width:"100%"}} src={img1} alt="" />
				</div>
				<div className="list">
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
					<div className="list-child">
						<img src={img2} alt="" />
						<p>美食</p>
					</div>
				</div>
				
			</div>
		)
	}
}





