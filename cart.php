<!DOCTYPE html>
<html>
<head>
	<title>Location for Chennai to Banglore</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Abril+Fatface|Dancing+Script" rel="stylesheet">
	<link rel="stylesheet" href="CSS/cart.css">
</head>
<body>
	<div class="container">
	<a href="index.html"><i class="fa fa-home"> </i></a>
	<h1 class="text-center text-danger mb-5" style="font-family: 'Abril Fatface', cursive;">Welcome to Car Rental Service</h1>
	<h3 class="text-center text-primary mb-5" style="font-family: 'Abril Fatface', cursive;">You are Good to Go from Chennai to Banglore</h3>
	<div class="row">
		<?PHP
		$con = mysqli_connect('localhost','root');
		mysqli_select_db($con,'test');
		$query = " SELECT `name`, `image`, `price`, `discount` FROM `cart_table` order by id ASC ";
		$queryfire = mysqli_query($con, $query);
		$num = mysqli_num_rows($queryfire);
		if($num > 0){
			while($product = mysqli_fetch_array($queryfire)){
				?>
			<div class="col-lg-3 col-md-3 col-sm-12 mb-3">
				<form>
					<div class="card">
						<h6 class="card-title bg-info text-white p-2 text-uppercase" style="text-align:center;"> <?php echo $product['name'];  ?>   </h6>
						<div class="card-body">
							<img src="<?php echo$product['image'];  ?>" alt="phone" class="img-fluid mb-2" >
						<h6> &#8377; <?php echo $product['price'];  ?><span> (<?php echo $product['discount'];  ?>% off) </span> </h6> 
						<h6 class="badge badge-success"> 4.4 <i class="fa fa-star"> </i> </h6>
						</div>
						<div class="btn-group d-flex">
                            <a href="#" class="btn btn-link flex-fill text-black mr-2" role="button">Add This Item</a>
                            <a href="abc.html" class="btn btn-success flex-fill text-white" role="button">Drive This</a>
						</div>
					</div>
				</form>
			</div>
		<?php		
			}
		}
		?>
	</div>
	</div>
	<div class="fb">
        Copyright &copy; VIT Vellore. All rights reserved.
    </div>
    <script>
    function relocate_home()
         location.href = "test.php";
</script>
</body>
</html>