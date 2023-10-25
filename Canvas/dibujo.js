const lienzo = document.querySelector('#lienzo');

const ctx = lienzo.getContext('2d');


ctx.beginPath();
ctx.fillStyle = 'green';
ctx.moveTo(190, 120); // Move pen to bottom-left corner
ctx.lineTo(205, 35); // Line to top corner
ctx.lineTo(310,100); // Line to bottom-right corner
ctx.closePath(); // Line to bottom-left corner
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'orange';
ctx.arc(200, 210, 120, 120, Math.PI * 2, true );
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(160, 160, 15 , 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(160, 160, 6 , 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(240, 160, 15 , 0, Math.PI * 2, true);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(240, 160, 6 , 0, Math.PI * 2, true);
ctx.fill();


ctx.moveTo(180, 200); // Move pen to bottom-left corner
ctx.lineTo(230, 200); // Line to top corner
ctx.lineTo(205, 220); // Line to bottom-right corner
ctx.closePath(); // Line to bottom-left corner
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.ellipse(200, 260, 45, 15, Math.PI / 100, 0, 4 * Math.PI);
ctx.fill();
ctx.stroke();

ctx.font = "50px serif";
ctx.fillText("Happy Haloween", 10, 35);
