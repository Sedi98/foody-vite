import './style.css'

const LoadingIndicator = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#ffffff9e] flex justify-center items-center z-[1000]">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
