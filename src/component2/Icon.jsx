// import React from "react";

// const NewComponent = React.createClass({
//     render() {
//       return (
//         <div>
//           <style dangerouslySetInnerHTML={{__html: "\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: #555;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 125%;\n  left: 50%;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n\n.tooltip .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #555 transparent transparent transparent;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1;\n}\n" }} />
//           <div className="tooltip">Hover over me
//             <span className="tooltiptext">Tooltip text</span>
//           </div>
//         </div>
//       );
//     }
//   });

// export default NewComponent;