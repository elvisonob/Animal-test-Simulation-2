.items-container ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  padding: 20px;
  list-style: none;
}

.process-sign {
  text-align: center;
  font-size: larger;
}

.list-items {
  display: grid;
  grid-template-rows: 50px 250px 1fr;
  border: 2px solid orange;
  border-radius: 5px;
}

.display {
  color: red;
  text-align: center;
  font-weight: bolder;
}

.priceAmount {
  font-weight: bolder;
}

li {
  border: 1px solid orange;
}

.edit-list {
  display: grid;
  /* grid-template-rows: 1fr 1fr; */
  padding: 5px;
}

.edit-list .list-price {
  justify-self: center;
}

h2 {
  text-align: center;
}

<div className={classes['items-container']}>
      <Filter selected={filteredYear} onDropDownChange={onChangeFilterDate} />
      <ul>
        {isLoading}
        {arrayToShow.length === 0 ? (
          <div className={classes.display}>
            No selected item for filtered Year
          </div>
        ) : (
          arrayToShow.map((item) => {
            return (
              <div className={classes['list-items']} key={item.id}>
                <h2>{item.name}</h2>
                <li>
                  <img
                    src={item.image}
                    alt="images"
                    width="100%"
                    height="100%"
                  />
                </li>
                <li className={classes['edit-list']}>
                  <div className={classes['list-price']}>
                    <div className={classes.priceAmount}>£{item.price}</div>
                    <div>Use By {item.useByDate}</div>
                  </div>

                  <button onClick={() => onAddItem(item)}>Add to Cart</button>
                </li>
              </div>
            );
          })
        )}
      </ul>
    </div>