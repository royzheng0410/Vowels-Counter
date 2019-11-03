import React from 'react';

const TextItems = ({textItems}) => {
  const textItemsList = textItems.length ? (
    <div>
      <h5>Recently Added</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Text</th>
            <th scope="col">Vowels Count</th>
          </tr>
        </thead>
        <tbody>
          {textItems.map(textItem => {
            return (
              <tr key={textItem.id}>
                <td> {textItem.text}</td>
                <td> {textItem.vowels_count}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    
  ) : (
    null
  )
  return (
    <div>
      {textItemsList}
    </div>
  );
}

export default TextItems;