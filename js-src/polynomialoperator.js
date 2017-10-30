
var algebra = require('algebra.js');

/* Generates a random polynomial, P, of 
degree specified where P(0) = secret_key  
Return polynomial, which is an array of its coefficients*/
function randomPolynomial(degree, secret_key, prime) {
	var poly = [];
	for (i = 0; i < degree; i++) {
		poly[i] = getRandomInt(0, prime);
	}
	poly[degree] = secret_key;
	return poly;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};


/* Takes in an array of tuples, where each is a tuple of
X and Y values, where Y = P(X). */
function interpolation(points) {
	var delta_polynomials = [];
	for (int i = 0; i < points.length; i++) {
		// constructing a delta polynomial for each point
		var expr = new Expression("x");
		var divide = 1;
		for (int j = 0; j < points.length; j++) {
			if (i != j) {
				var tmpExpr = new Expression("x");
				tmpExpr = tmpExpr.subtract(points[j][0]);
				divide = divide * (points[i][0] - points[j][0]); 
				expr = expr.multiply(tmpExpr);
			}
		}
		expr = expr.divide("x");
		delta_polynomials[i] = expr.divide(divide);
	}
	var poly = delta_polynomials[0].multiply(points[k][1]);
	for (int k = 1; k < delta_polynomials.length; k++) {
		poly = poly.add(delta_polynomials[k]).multiply(points[k][1]);
	}
	return poly;
};


//
