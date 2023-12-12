import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { e, i, updateItem, deleteItem } = this.props;

    return (
      <div key={i} id='edit'>
        <input
          type="text"
          value={e}
          onChange={(event) => {
            updateItem(event.target.value, i);
          }}
        />
        <button
          style={{
            fontWeight: 'bolder'
          }}
          onClick={() => {
            deleteItem(i);
          }}
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default TodoItem;