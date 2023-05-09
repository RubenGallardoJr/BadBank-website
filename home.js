function Home(){
  const ctx = React.useContext(UserContext);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="bank.png" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Em-BANK-ment</h5>
        <p className="card-text">This is a BadBank website aimed at showcasing the use of routing, bootstrap, form components, validation and other webdevelopment skills.</p>
      
      </div>
    </div>
  );
}
