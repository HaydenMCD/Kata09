import "../../Styles/ScanButton.css";

interface ScanButtonProps {
  id: number;
}

const ScanButton = (props: ScanButtonProps) => {
  const handleClick = () => {
    console.log(props.id);
  };

  return (
    <div className="scanButtonContainer">
      <button className="scanButton" onClick={handleClick}>
        Scan
      </button>
    </div>
  );
};

export default ScanButton;
