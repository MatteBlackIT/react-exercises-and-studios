import { useState } from "react";

export default function BoardAssignment() {
  const boards = [
    { label: "Chocolate Chip", value: "Chocolate Chip" },
    { label: "Salted Caramel", value: "Salted Caramel" },
    { label: "Double Choco Chunk", value: "Double Choco Chunk" },
  ];

  let board = boards.map((board, index) => {
   return <option value={index}>{board.value}</option>
});


const [boardName, setboardName] = useState("no boards yet")


  const handleChange = (event) => {
   setboardName(event.target.value);
   
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {board}
      </select>

      <p>Saved to {boardName}!</p>
    </div>
  );
}
