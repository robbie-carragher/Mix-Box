<!DOCTYPE HTML>

<html>
	<head>
		<title>CONTACT</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="main.css" />
		<link rel="stylesheet" href="added.css" />

	</head>
	<body class="subpage">

		<!-- Header and nav starts here///////////// -->


<!-- Header -->
<header id="header" class="alt">

<?php include 'header.php'?>


</header>

<!-- Nav -->
<nav id="menu">
<?php include 'nav.php'?>
</nav>


		<!-- Header and nav ends here///////////// -->



<!-- //////////Banner starts here //////////////////// -->
<section class="banner full">
	<article>
		
		<img src="assets/images/texture/silverbg.jpg" alt="silver texture background" />
		<div class="inner">
			<header>
				<p>TUNE IN</p>
				
				<h2>MIX BOX</h2>
			</header>
		</div>
	</article>
	<article>
		<img src="assets/images/texture/silverbg2.jpg" alt="" />
		<div class="inner">
			<header>
				<p>TUNE OUT</p>
				
				<h2>MIX BOX</h2>
			</header>
		</div>
	</article>
	<article>
		<img src="assets/images/texture/silverbg3.jpg"  alt="" />
		<div class="inner">
			
			<header>
				<p>GET UP</p>
			   <h2>MIX BOX</h2>
			</header>
		
		</div>
	</article>
	<article>
	
		<img src="assets/images/texture/silverbg4.jpg"  alt="" />
		<div class="inner">
			<header>
				<p>GET DOWN</p>
				
				<h2>MIX BOX</h2>
			</header>
		</div>
	</article>
	<article>
		<img src="assets/images/texture/silverbg5.jpg"  alt="" />
		<div class="inner">
			<header>
				<p>DRIFT AWAY</p>
			
				<h2>MIX BOX</h2>
			</header>
		</div>
	</article>
</section>

<!-- //////////Banner ends here //////////////////// -->



		<!-- Main starts here ///////////////////////// -->
		
<main class="formChange">
	
	
							<!-- Form ////////////////////////////////-->
							<h3>Get in touch</h3>

							<form method="post" action="#">
								<div class="row uniform">
									<div class="6u 12u$(xsmall)">
										<input type="text" name="name" id="name" value="" placeholder="Name" />
									</div>
									<div class="6u$ 12u$(xsmall)">
										<input type="email" name="email" id="email" value="" placeholder="Email" />
									</div>
									<!-- Break -->
									<div class="12u$">
										<div class="select-wrapper">
											<select name="category" id="category">
												<option value="">- Category -</option>
												<option value="1">Manufacturing</option>
												<option value="1">Shipping</option>
												<option value="1">Administration</option>
												<option value="1">Human Resources</option>
											</select>
										</div>
									</div>
									<!-- Break -->
									<div class="4u 12u$(small)">
										<input type="radio" id="priority-low" name="priority" checked>
										<label for="priority-low">Low Priority</label>
									</div>
									<div class="4u 12u$(small)">
										<input type="radio" id="priority-normal" name="priority">
										<label for="priority-normal">Normal Priority</label>
									</div>
									<div class="4u$ 12u$(small)">
										<input type="radio" id="priority-high" name="priority">
										<label for="priority-high">High Priority</label>
									</div>
									<!-- Break -->
									<div class="6u 12u$(small)">
										<input type="checkbox" id="copy" name="copy">
										<label for="copy">Email me a copy of this message</label>
									</div>
									<div class="6u$ 12u$(small)">
										<input type="checkbox" id="human" name="human" checked>
										<label for="human">I am a human and not a robot</label>
									</div>
									<!-- Break -->
									<div class="12u$">
										<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
									</div>
									<!-- Break -->
									<div class="12u$">
										<ul class="actions">
											<li><input type="submit" value="Send Message" /></li>
											<li><input type="reset" value="Reset" class="alt" /></li>
										</ul>
									</div>
								</div>
							</form>


							<!-- Form ////////////////////////////////-->
</main>

		

		<!-- Footer -->
			<footer id="footer">
				<div class="container">
				
				</div>
				<div class="copyright">
					&copy; Untitled. All rights reserved.
				</div>
			</footer>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>