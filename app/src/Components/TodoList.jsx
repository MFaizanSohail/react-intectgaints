const person = {
	name: 'Gregorio Y. Zara',
	img_url: "https://i.imgur.com/7vQD0fPs.jpg",
	theme: {
	  backgroundColor: 'black',
	  color: 'pink'
	}
  };
  
  export default function TodoList() {
	return (
	  <div style={person.theme}>
		<h1>{person.name}'s Todos</h1>
		<img
		  className="avatar"
		  src= {person.img_url}
		  alt="Gregorio Y. Zara"
		/>
		<ul>
		  <li>Improve the videophone</li>
		  <li>Prepare aeronautics lectures</li>
		  <li>Work on the alcohol-fuelled engine</li>
		</ul>
	  </div>
	);
  }
  