import styles from './AddTodo.module.css';

function AddTodo () {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            className={styles['input-box']}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input type="date" className={styles['input-box']} />
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
