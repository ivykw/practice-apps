import React from 'react';
// need to be passed onUpdate and onDelete functions

function Term(props) {
  return (
    <div>
      <b>{props.term.term}</b>
      <div>{props.term.definition}</div>
      <button onClick={(e) => {props.handleDelete(props.term.term)}}>Delete Entry</button>
      <button onClick={(e) => {props.handleEdit(props.term.term)}}>Update Entry</button>
    </div>
  );
}

export default Term;