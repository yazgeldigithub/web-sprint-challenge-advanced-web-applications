import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { editColorService, deleteColorService } from '../services/colorServices';
import fetchColorService from '../services/fetchColorService';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    editColorService(editColor);
  };

  const deleteColor = (colorToDelete) => {
    deleteColorService(colorToDelete.id);
  };
  
  useEffect(() => {
    toggleEdit(true);
    fetchColorService(setColors);
    toggleEdit(false);
  }, [])

  return (
    <div className="container">
      {colors && <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor} /> }
      {colors &&  <Bubbles colors={colors}/> }
      {!colors && <p>Colors not detected.</p>}
    </div>
  );
};

export default BubblePage;
//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions