const ErrorExample = () => {
  let count = 0;
  const handleIncrrease = () => {
    count++;
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrrease} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample;
