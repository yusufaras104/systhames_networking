import React from 'react';

function SysthamesPDF() {
  return (<div
  style={{
    position: "relative",
    paddingTop: "max(60%,324px)",
    margin: "auto",
    width: "90%",
    height: 0
  }}
>
  <iframe
    style={{
      position: "absolute",
      border: "none",
      width: "70%",
      height: "70%",
      left: 0,
      top: 0
    }}
    src="https://online.fliphtml5.com/fpxtd/puic/"
    seamless="seamless"
    scrolling="no"
    frameBorder={0}
    allowTransparency="true"
    allowFullScreen="true"
  />
</div>
  )
}

export default SysthamesPDF;
