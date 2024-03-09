import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import PropType from "prop-types"
export default function Gauge(props) {
  return (
    <div className="head_gauge">
      <CircularProgressBar
        colorCircle="#fff"
        colorSlice="#FF1744"
        fontColor={props.textcolor}
        fontSize="1.2rem"
        fontWeight={600}
        percent={props.value}
        stroke={5}
        strokeBottom={10}
        strokeDasharray="1, 3"
        styles={{
          borderRadius: '50%',
          boxShadow: 'inset 0 0 25px 10px #f50057',
          position: 'relative',
        }}
        textPosition="0em"
        
      >
         <div
          style={{
            fontSize: 'larger', // Adjust the font size as needed
            color: props.textcolor, // Adjust the text color
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            marginTop:"30px"
          }}
        >
          {props.text}
          {/* Display the custom text, e.g., the percentage */}
        </div>
      </CircularProgressBar>

        {/* <div
          style={{
            animation: 'heart 0.8s infinite',
            fontSize: '2rem',
            color: 'red',
            position: 'absolute',
            textShadow: '0px 0px 10px #f50057',
            width: '100%',
            textAlign: 'center',
            transformOrigin: 'center bottom',
            top: '60%',   // Adjusted top to center vertically
            left: '50%',  // Adjusted left to center horizontally
            marginLeft: '-4rem',
          }}
        >
          
        </div> */}
      
    </div>
  );
}

Gauge.propTypes={
  textcolor:PropType.any.isRequired,
  value:PropType.any.isRequired,
  text:PropType.any.isRequired
}