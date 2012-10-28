<div class="authentication offset6">
	<g:if test="${ session.user != null }">
		<span class="span3">Welcome, ${ session.user.username}! | <g:link controller="user" action="userLogout">Log Out</g:link></span>
	</g:if>
	<g:else>
		<span><g:link controller="static" action="login">Log In</g:link> | <g:link controller="static" action="register">Register</g:link></span>
	</g:else>
</div>