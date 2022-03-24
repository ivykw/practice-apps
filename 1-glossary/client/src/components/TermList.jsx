import React from 'react';
import Term from './Term.jsx';

function TermList(props) {
  return (
    <div>
      {props.terms.map(term =>
        <Term key={term.term} term={term} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>
      )}
    </div>
  );
}

export default TermList;