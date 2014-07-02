<script>
var chkonline =function (){
	var online = $('<ul>');
	function addUser(user){
	var html = $('<li style="list-style:none;margin-bottom:5px;">')
		.append($('<img src="'+user.picture+'" class="shoutbox-shout-avatar '+user.status+'" title="'+user.username+'">'))
		.append('<a href = "/user/'+user.userslug+'"><span style="padding-left:10px">'+user.username+'</span>');
	return html;
							};

	$.getJSON('/api/users/online',function(data){
 	 data.users.forEach(function(user){
  		var html = addUser(user);
  		online.append(html);
  		});
 	 online.sort()
 	 $('#online').html(online)

	});
						}
setInterval(chkonline,5000);

</script>

<div id="online">

</div>
