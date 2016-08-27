function Circle(radius) {

	return (
		function getArea() {
			function changeRadius() {
				this.radius = 20;
			}
			changeRadius();
			return Math.PI * Math.pow(radius,2);
		}
	)
}

var area = Circle(10);
console.log(area());