// JavaScript Document
$(document).ready(function(e){
 document.addEventListener("deviceready",function(){
	 $('#disp table td').eq(3).text(device.mode1);
	 $('#disp table td').eq(5).text(device.cordova);
	 $('#disp table td').eq(7).text(device.plataform);
	 $('#disp table td').eq(9).text(device.version);
	 $('#disp table td').eq(11).text(device.uuid);
	 document.addEventListener("pause",function(){
		 escribehistorial('la app se pausó');
	 },false);//pause
	  document.addEventListener("resume",function(){
		 escribehistorial('la app se reinicio');
	 },false);//resume
	  document.addEventListener("online",function(){
		 escribehistorial('la app se conecto a la red');
	 },false);//se conecto
	  document.addEventListener("offline",function(){
		 escribehistorial('la app se desconecto de la red');
	 },false);//se desconecto
 },false);//ready device
});//document
function escribehistorial(accion){
	$('#eHistorial').append('<li>'+accion+'</li>');
}
	 