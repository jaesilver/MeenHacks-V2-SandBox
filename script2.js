// Define a data object containing waste data
var wasteData = [
	{
		type: "Plastic",
		quantity: "100 kg",
		company: "ABC Plastics"
	},
	{
		type: "Steel scrap",
		quantity: "100 kg",
		company: " XYZ Industries"
	},
	{
		type: "Lead slag",
		quantity: "100 kg",
		company: "123 Glass"
	},
	{
		type: "Metal",
		quantity: "75 kg",
		company: "456 Metals"
	}
];

// Define a function to search for waste based on user inputs
function search() {
	var wasteType = document.getElementById("waste-type").value;
	var wasteQuantity = document.getElementById("waste-quantity").value;

	// Filter waste data based on user inputs
	var filteredData = wasteData.filter(function(item) {
		return item.type.toLowerCase() === wasteType.toLowerCase() && item.quantity === wasteQuantity + " kg";
	});

	// Generate HTML code for displaying search results
	var resultsHTML = "";
	if (filteredData.length === 0) {
		resultsHTML += "<p>No results found.</p>";
	} else {
		filteredData.forEach(function(item) {
			resultsHTML += "<div class='result-box'>";
			resultsHTML += "<h2>" + item.type + "</h2>";
			resultsHTML += "<p>Quantity: " + item.quantity + "</p>";
			resultsHTML += "<p>Company: " + item.company + "</p>";
			resultsHTML += "</div>";
		});
	}

	// Update the results div with search results
	document.getElementById("results").innerHTML = resultsHTML;
}
