// Step 1: Use the array "materials" and create a dropdown whose possible values
//         shows all possible "type".

// Step 2: When selecting a dropdown value, show the filtered items that match that type.

const materials = [
    {
      name: "Keyboard",
      description: "A panel of keys to operate a computer.",
      price: 60,
      currency: "USD",
      type: "Computer Part"
    },
    {
      name: "Mouse",
      description: "A handheld device that will control a cursor on the screen.",
      price: 20,
      currency: "USD",
      type: "Computer Part"
    },
    {
      name: "Cell Phone",
      description:
        "A handheld device that can make phone calls, send text messages, and connect to the internet.",
      price: 500,
      currency: "USD",
      type: "Personal Electronic"
    },
    {
      name: "Speakers",
      description: "Audio Device that will emit sound from the computer.",
      price: 50,
      currency: "USD",
      type: "Personal Electronic"
    },
    {
      name: "Plate",
      description: "A flat ceramic usually to eat food off of.",
      price: 5,
      currency: "USD",
      type: "Kitchenware"
    },
    {
      name: "Fork",
      description: "A metal prong used to eat food with.",
      price: 1,
      currency: "USD",
      type: "Kitchenware"
    }
  ];
  
  //create an empty array that will hold the filtered types from materials object
  const materialTypes = [];
  //create a function that loops over materials to fill material types array 
  function filteredTypes() {
    materials.map(material => {
      //create an if statement that checks if the type exists in materials object 
      if (!materialTypes.includes(material.type)){
        materialTypes.push(material.type);
      }
    })
  };
  filteredTypes();
  
  export default function App() {
    return (
      <>
        <h2>Material List</h2>
        <ol className="Material-List">
          {materials.map((material, index) => (
            <li key={index}>{material.name}</li>
          ))}
        </ol>
        <label>Material List</label>
        <select name="material-list">
            {materialTypes.map((material, index) => (
                <option key={index}>{material}</option>
              ))}
            
        </select>
        
      </>
    );
  }