contract Parsel {
	public string carats;
	public string value;

	struct Participants {
		public Particpant origin;
	}
	public Participants participants;

	function Parsel(string _carats, string _value, address _origin) {
		carats = _carats;
		value = _value;
		participants.origin = _origin;
	}
}
