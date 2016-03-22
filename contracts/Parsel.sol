contract Parsel {
	string carats;
	string value;
	address countryOfOrigin;

	function Parsel(string _carats, string _value, address _countryOfOrigin) {
		carats = _carats;
		value = _value;
		countryOfOrigin = _countryOfOrigin;
	}
}
