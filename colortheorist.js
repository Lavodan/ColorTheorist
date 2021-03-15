function circleAbs(a) {
  if (a >= 360) {
    a = a - 360
    return a
  }
} //Does the same as Math.abs() but in reverse for circles

function complimentary(x) {
  let y = Math.abs(x-180)
  return y
} //Calculate the complimantary value to X

function splitComplimentary(x,y) {
  let z = Math.abs((x+y)/2-180)
  return z
}

function doubleComplimentary(x,y) {
  let a = Math.abs(x-180)
  let b = Math.abs(y-180)
  return [a,b]
}

function triadic(x) {
  let y = Math.abs(x - 120)
  let z = Math.abs(y - 120)
  return [y,z]
}


function toggleDisableElement(y,z) {
  let x = document.getElementById(y);
  if (z == 0) {
    z = "block"
  } else {
    z = "inline"
  }

  if (x.style.display === "none") {
    x.style.visibility = z;
  } else {
    x.style.display = "none";
  }
}

function enableElement(y,z) {
  let x = document.getElementById(y);
  x.style.display = z
}

function disableElement(y) {
  let x = document.getElementById(y);
  x.style.display = "none"
}

var colorPicker = new iro.ColorPicker("#mono", {
  display: "inline",
  width: 300
})
