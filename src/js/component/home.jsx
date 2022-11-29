import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	
	const [inputValue,setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	useEffect(() => {
	
		fetch('https://assets.breatheco.de/apis/fake/todos/user/denis', {
			method: "GET",
			//body: JSON.stringify(tasklist),
			headers: {
			  "Content-Type": "application/json"
			}
		  })
		  .then(resp => {
			  console.log(resp.ok); // will be true if the response is successfull
			  console.log(resp.status); // the status code = 200 or code = 400 etc.
			 // console.log(resp.text()); // will try return the exact result as string
			  return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		  })
		  .then(data => {
			  //here is were your code should start after the fetch finishes
			  console.log(data); //this will print on the console the exact object received from the server
		  })
		  .catch(error => {
			  //error handling
			  console.log(error);
		  });
		},[]);
	
	return(
		<div className="container">
			<h1>My Todos</h1>
			<ul>
				<li>
					<input
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress ={(e) => {
						if (e.key === "Enter") {
						setTodos(todos.concat([inputValue]));
						setInputValue("");
					}
				}}
					placeHolder="What do you need?"></input>
				</li>
				{todos.map((item,index) => (
					<li>
						{item} 
						<i 
						
						class="fas fa-trash-alt"
						 onClick={() => 
						 setTodos(
							todos.filter(
								(t, currentIndex) => 
								index != currentIndex
								)
								)
								}></i>
					</li>
				))}
			</ul>
			<div> {todos.length} tasks</div>
		</div>
	);
				};
				export default Home;
